import { MongoClient, Db } from "mongodb";

function getMongoUri(): string {
    const uri = (process.env.MONGODB_URI || "").trim();
    if (!uri) {
        throw new Error(
            "MONGODB_URI is not defined. Set it in your host environment (e.g., Hostinger env vars) and redeploy."
        );
    }
    return uri;
}

const DB_NAME = process.env.MONGODB_DB?.trim() || "jeeorigin";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const uri = getMongoUri();

    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db(DB_NAME);

    cachedClient = client;
    cachedDb = db;

    console.log("✅ Connected to MongoDB Atlas");
    return { client, db };
}
