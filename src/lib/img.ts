import database from "./database";
import { unstable_cache } from 'next/cache';

const collection = database.collection('theme');
async function getThemeData(theme = 'moebooru') {
    const result = await collection.find({ name: theme }).toArray();
    if (result.length === 0) {
        return null;
    }
    const themeItem = result[0];
    return themeItem["data"];
};
const getCachedTheme = unstable_cache(
    async (name) => getThemeData(name),
);

export default async function getImage(count: number, theme='moebooru', length=10) {
    const themeData = await getCachedTheme(theme);
    if (themeData == null) {
        return null;
    }
    const countArray = count.toString().padStart(length, '0').split('');
    let x = 0, y = 0, parts = '';
    for (let i = 0; i < countArray.length; i++) {
        const num = parseInt(countArray[i]);
        const { width, height, data } = themeData[num];
        parts = `${parts}
        <image x="${x}" y="0" width="${width}" height="${height}" xlink:href="${data}" />`
        x += width
        if(height > y) y = height
    }
    return `<?xml version="1.0" encoding="UTF-8"?>
                <svg width="${x}" height="${y}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="image-rendering: pixelated;">
                    <title>Next.js Moe Counter</title>
                    <g>
                    ${parts}
                    </g>
                </svg>`;
}