import { NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import DriverRequestEmail from "../../emails/DriverRequestEmail";
import { sanityClient } from "@/lib/sanity";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email: requesterEmail,
      phone,
      location,
      requestDetails,
    } = body;

    // 1. Save to Sanity
    await sanityClient.create({
      _type: "driverRequest",
      fullName,
      email: requesterEmail,
      phone,
      location,
      requestDetails,
    });

    // 2. Generate styled email
    const html = await render(
      // Add `await` here
      DriverRequestEmail({
        fullName,
        email: requesterEmail,
        phone,
        location,
        requestDetails,
      })
    );

    // 3. Send via Resend
    await resend.emails.send({
      from: "requests@lagosdrivers.ng",
      to: "admin@lagosdrivers.ng",
      subject: "New Driver Hire Request",
      html,
    });

    return NextResponse.json({ success: true, message: "Request submitted" });
  } catch (error) {
    console.error("Hire API Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
