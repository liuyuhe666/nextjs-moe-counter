import { NextRequest } from 'next/server';
import getImage from '@/lib/img';
import getCountByName from '@/lib/count';

const len = process.env.COUNT_LEN ?? '10';
const headers = {
    'Content-Type': 'image/svg+xml'
};

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get('name') ?? '';
    const theme = searchParams.get('theme') ?? 'moebooru';
    const length = parseInt(len);
    let count = 123456789;
    if (name !== '') {
        count = await getCountByName(name);
    }
    const img = await getImage(count, theme, length);
    return new Response(`${img}`, {
        status: 200,
        headers: headers
    });
}