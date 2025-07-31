import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Newsletter from '@/models/Newsletter';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // Create new newsletter subscription
    const subscriber = new Newsletter({
      email,
      subscribedAt: new Date(),
      status: 'active'
    });

    await subscriber.save();

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    
    const subscribers = await Newsletter.find({ status: 'active' })
      .sort({ subscribedAt: -1 })
      .select('email subscribedAt')
      .limit(100);

    return NextResponse.json({
      subscribers,
      total: subscribers.length
    });
  } catch (error) {
    console.error('Get newsletter subscribers error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
