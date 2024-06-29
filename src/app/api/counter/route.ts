import { type NextRequest } from 'next/server';
import getImage from '@/lib/img';
import getCountByName from '@/lib/count';

const len = process.env.COUNT_LEN || '10';

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
        return new Response(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <text x="0" y="15" fill="red">Error!</text>
                            </svg>`, {
            status: 200,
            headers: {
                'Content-Type': 'image/svg+xml'
            }
        });
    }
    return new Response(`${img}`, {
        status: 200,
        headers: {
            'Content-Type': 'image/svg+xml'
        }
    });
}