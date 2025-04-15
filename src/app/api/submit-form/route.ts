import { MongoClient } from 'mongodb';
import { NextRequest } from 'next/server';

// Define the expected form structure from the frontend
interface FormData {
  studentName: string;
  age: string;
  email: string;
  phone: string;
  grade: string;
  parentName: string;
  parentPhone: string;
  concerns: string;
  preferredTime: string;
  counselingType: string;
  environmentalInterest: string;
  additionalInfo: string;
}

interface SubmissionData extends FormData {
  createdAt: Date;
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

    // Validate some required fields
    const requiredFields: (keyof FormData)[] = [
      'studentName',
      'age',
      'email',
      'phone',
      'grade',
      'parentName',
      'parentPhone',
      'concerns',
      'preferredTime',
      'counselingType',
      'environmentalInterest'
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        return Response.json(
          {
            success: false,
            message: `Missing required field: ${field}`
          },
          { status: 400 }
        );
      }
    }

    // MongoDB connection string
    const uri = process.env.MONGO_URI;
    if (!uri) {
      return Response.json(
        { success: false, message: 'MongoDB connection string not set' },
        { status: 500 }
      );
    }

    const client = new MongoClient(uri);

    try {
      await client.connect();
      const db = client.db('bliss');
      const collection = db.collection<SubmissionData>('submissions');

      const submissionData: SubmissionData = {
        ...formData,
        createdAt: new Date()
      };

      const result = await collection.insertOne(submissionData);

      return Response.json(
        {
          success: true,
          message: 'Form submitted successfully',
          id: result.insertedId
        },
        { status: 201 }
      );
    } finally {
      await client.close();
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return Response.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
