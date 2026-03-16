import { MongoClient, Db } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
    console.warn("⚠️ MONGODB_URI is not set in environment variables");
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    if (!MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined. Please add it to your .env.local file.");
    }

    const client = new MongoClient(MONGODB_URI);
    await client.connect();

    const db = client.db("jeeorigin");

    cachedClient = client;
    cachedDb = db;

    console.log("✅ Connected to MongoDB Atlas");
    return { client, db };
}
