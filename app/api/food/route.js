import clientPromise from "@/app/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db('restaurant');
    const result = await db.collection('foods').insertOne(body);
    return Response.json({ 
      success: true,
      insertedId: result.insertedId 
    });
    
  } catch (error) {
    console.error('MongoDB Error:', error);
    return Response.json(
      { error: 'Failed to insert food item' }, 
      { status: 500 }
    );
  }
}

export async function GET(){
    const client = await clientPromise;
    const db = client.db('restaurant');
    const food = await db.collection('foods').find().toArray();
    return Response.json(food);
}