'use strict'

const fs = require('fs');
const path = require('path');
const mimeType = require('mime-types');
const sizeOf = require('image-size');
const { MongoClient } = require("mongodb");


const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const themePath = path.resolve(__dirname, '../../assets/theme');


function getDataUri(path){
    const mime = mimeType.lookup(path);
    const base64 = fs.readFileSync(path).toString('base64');
    return `data:${mime};base64,${base64}`;
}

async function run() {
    try {
        console.log(`themePath: ${themePath}`);
        const database = client.db('moe-counter');
        const collection = database.collection('theme');
        const res = [];
        fs.readdirSync(themePath).forEach(theme => {
            const imgList = fs.readdirSync(path.resolve(themePath, theme));
            const themeList = [];
            imgList.forEach(img => {
                const imgPath = path.resolve(themePath, theme, img);
                console.log(`imgPath: ${imgPath}`);
                const name = path.parse(img).name;
                const { width, height } = sizeOf(imgPath);
                themeList.push({
                    name: name,
                    width: width,
                    height: height,
                    data: getDataUri(imgPath),
                });
            });
            res.push({
                name: theme,
                data: themeList,
            });
        });
        const insertResult = await collection.insertMany(res);
        console.log(insertResult);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

  run().catch(console.dir);