'use strict'

const fs = require('node:fs')
const path = require('node:path')
const sizeOf = require('image-size')
const mimeType = require('mime-types')

const themePath = path.resolve(__dirname, './assets/theme')

function getDataURI(path) {
  const mime = mimeType.lookup(path)
  const base64 = fs.readFileSync(path).toString('base64')
  return `data:${mime};base64,${base64}`
}

async function run() {
  // eslint-disable-next-line no-console
  console.log(`themePath: ${themePath}`)
  const themeMap = new Map()
  fs.readdirSync(themePath).forEach((theme) => {
    const imgList = fs.readdirSync(path.resolve(themePath, theme))
    const themeList = []
    imgList.forEach((img) => {
      const imgPath = path.resolve(themePath, theme, img)
      // eslint-disable-next-line no-console
      console.log(`imagePath: ${imgPath}`)
      const name = path.parse(img).name
      const { width, height } = sizeOf(imgPath)
      themeList.push({
        name,
        width,
        height,
        data: getDataURI(imgPath),
      })
    })
    themeMap.set(theme, themeList)
  })
  fs.writeFileSync(path.resolve(__dirname, './src/assets/theme.json'), JSON.stringify(Object.fromEntries(themeMap)))
  // eslint-disable-next-line no-console
  console.log('theme.json generated')
}

run()
