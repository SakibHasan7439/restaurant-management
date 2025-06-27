import clientPromise from "@/app/lib/mongodb";

export async function POST(req){
    const body = await req.json();
    const db = await clientPromise();
    const res = await db.collection('foods').insertOne(body);
    return Response.json({ insertedId: res.insertedId });
}