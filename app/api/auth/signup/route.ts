import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import sgMail from "@sendgrid/mail";

export const dynamic = "force-dynamic";

if (process.env.SENDGRID_API_KEY?.startsWith("SG.")) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, phone, firstName, lastName, message } = body;

    if (!email || !phone) {
      return NextResponse.json(
        { message: "Email and phone are required" },
        { status: 400 }
      );
    }

    const newUser = await User.create({
      email,
      phone,
      firstName,
      lastName,
      message,
    });

    return NextResponse.json(
      { message: "User created successfully", userId: newUser._id },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("Signup Error:", error);

    // ✅ Handle duplicate email error
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 400 }
      );
    }

    // ✅ Handle mongoose validation errors
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { message: "Invalid input data" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
