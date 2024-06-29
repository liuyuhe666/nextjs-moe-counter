import database from "./database";

const collection = database.collection('counter');

export default async function getCountByName(name: string) {
    const result = await collection.find({ name: name }).toArray();
    let data = 1;
    if (result.length === 0) {
        await collection.insertOne({
            name: name,
            data: data
        });
        return data;
    }
    const count = result[0]["data"];
    data = count + 1;
    await collection.updateOne({ name: name }, { $set: { data: data } });
    return data;
}