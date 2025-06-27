import clientPromise from "@/app/lib/mongodb";

export default async function handler(req, res){
    const client = clientPromise;
    const db = client.db("restaurant");

    if (req.method === 'GET') {
    // If someone makes a GET request to /api/users
    const users = await db.collection("users").find({}).toArray()
    res.json(users) // Send back all users as JSON
  }
}