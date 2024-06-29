import { type NextRequest } from 'next/server';
import getImage from '@/lib/img';
import getCountByName from '@/lib/count';

const len = process.env.COUNT_LEN || '10';
const headers = {
    'Content-Type': 'image/svg+xml'
};
const errorImg = `<?xml version="1.0" encoding="UTF-8"?>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="image-rendering: pixelated;">
                    <title>Next.js Moe Counter</title>
                    <text x="0" y="15" fill="red">Generate Image Error!</text>
                </svg>`;


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get('name') || '';
    const theme = searchParams.get('theme') || 'moebooru';
    const length = parseInt(len);
    let count = 123456789;
    if (name !== '') {
        count = await getCountByName(name)
    }
    const img = await getImage(count, theme, length)
    if (img == null) {
        return new Response(`${errorImg}`, {
            status: 200,
            headers: headers
        });
    }
    return new Response(`${img}`, {
        status: 200,
        headers: headers
    });
}