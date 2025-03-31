import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongo_config';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("bliss");
    const collection = db.collection("contact_forms");

    // Add timestamp to the data
    const data = {
      ...body,
      createdAt: new Date(),
    };

    // Insert the data into MongoDB
    const result = await collection.insertOne(data);

    return NextResponse.json(
      { message: "Form submitted successfully", id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { message: "Error submitting form" },
      { status: 500 }
    );
  }
} 