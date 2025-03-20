import themeData from '../assets/theme.json'

interface ThemeItem {
  name: string
  width: number
  height: number
  data: string
}

export default function getImage(
  count: number,
  theme = 'moebooru',
  length = 10,
) {
  const countArray = count.toString().padStart(length, '0').split('')
  let x = 0
  let y = 0
  let parts = ''
  for (let i = 0; i < countArray.length; i++) {
    const num = Number.parseInt(countArray[i])
    const themeMap: Map<string, ThemeItem[]> = new Map(
      Object.entries(themeData),
    )
    const themeList = themeMap.get(theme)
    if (themeList) {
      const { width, height, data } = themeList[num]
      parts = `${parts}
          <image x="${x}" y="0" width="${width}" height="${height}" xlink:href="${data}" />`
      x += width
      if (height > y)
        y = height
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
                <svg width="${x}" height="${y}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="image-rendering: pixelated;">
                    <title>Next.js Moe Counter</title>
                    <g>
                    ${parts}
                    </g>
                </svg>`
}
