import { MongoClient, ServerApiVersion } from 'mongodb';
import asyncHandler from '../utils/asyncHandler';
export async function run() {
    const URI = process.env.MONGODBURI;
    const client = new MongoClient(URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    asyncHandler(client.connect);
    asyncHandler(client.db("admin").command({ ping: 1 }));
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

}

