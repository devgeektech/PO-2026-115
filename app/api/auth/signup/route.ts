import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import sgMail from "@sendgrid/mail";

export const dynamic = "force-dynamic"; 
// prevents static optimization in Next 15

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, phone, firstName, lastName, month, day, year } = body;

    if (!email || !phone) {
      return NextResponse.json(
        { message: "Email and phone are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const newUser = await User.create({
      email,
      phone,
      firstName,
      lastName,
      dob: { month, day, year },
    });

    // ✅ Send Welcome Email
    // await sgMail.send({
    //   to: email,
    //   from: process.env.SENDGRID_FROM_EMAIL!,
    //   subject: "Welcome to Our Platform 🎉",
    //   html: `
    //     <h2>Welcome ${firstName || ""}!</h2>
    //     <p>Your account has been successfully created.</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: "User created & email sent", userId: newUser._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
