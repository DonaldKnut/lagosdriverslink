import { NextRequest, NextResponse } from "next/server";
import { sanityClient } from "@/lib/sanity";
import { sendDriverRequestMail, sendCustomerEmail } from "@/utils/mail";

export async function POST(req: NextRequest) {
  try {
    const {
      personalDetails,
      projectDetails,
      vehicleDetails,
      addressInformation,
    } = await req.json();

    // Format request details as HTML for email body
    const requestDetailsHtml = `
      <h2 style="color: #facc15; font-family: Arial, sans-serif;">Driver Request Details</h2>
      <h3 style="color: #eab308; font-family: Arial, sans-serif;">Personal Details</h3>
      <p style="font-family: Arial, sans-serif;">
        <strong>Full Name:</strong> ${personalDetails.fullName}<br />
        <strong>Email:</strong> ${personalDetails.emailAddress}<br />
        <strong>Phone:</strong> ${personalDetails.phoneNumber}<br />
        <strong>Location:</strong> ${personalDetails.preferredDriverLocation}<br />
        <strong>Marital Status:</strong> ${personalDetails.maritalStatus}
      </p>
      <h3 style="color: #eab308; font-family: Arial, sans-serif;">Driver Requirements</h3>
      <p style="font-family: Arial, sans-serif;">
        <strong>Driver Type:</strong> ${projectDetails.driverType}<br />
        <strong>Contract Duration:</strong> ${projectDetails.contractDuration}<br />
        <strong>Salary:</strong> ₦${projectDetails.salaryPackage}<br />
        <strong>Work Schedule:</strong> ${projectDetails.workSchedule}<br />
        <strong>Accommodation:</strong> ${projectDetails.accommodationProvided}<br />
        <strong>Duties:</strong> ${projectDetails.dutiesDescription}<br />
        <strong>Resumption:</strong> ${projectDetails.resumptionDate} ${projectDetails.resumptionTime}<br />
        <strong>Closing Time:</strong> ${projectDetails.closingTime}
      </p>
      <h3 style="color: #eab308; font-family: Arial, sans-serif;">Vehicle Information</h3>
      <p style="font-family: Arial, sans-serif;">
        <strong>Provides Vehicle:</strong> ${vehicleDetails.providesVehicle}<br />
        <strong>Vehicle Info:</strong> ${vehicleDetails.vehicleBrand} ${vehicleDetails.vehicleModel} (${vehicleDetails.vehicleYear})<br />
        <strong>Transmission:</strong> ${vehicleDetails.transmissionType}<br />
        <strong>Insurance:</strong> ${vehicleDetails.insuranceType}
      </p>
      <h3 style="color: #eab308; font-family: Arial, sans-serif;">Address Information</h3>
      <p style="font-family: Arial, sans-serif;">
        <strong>Home Address:</strong> ${addressInformation.homeAddress}<br />
        <strong>Office Address:</strong> ${addressInformation.officeAddress}<br />
        <strong>Pickup Locations:</strong> ${addressInformation.regularPickupLocations}
      </p>
    `;

    // 1. Save to Sanity
    await sanityClient.create({
      _type: "driverRequest",
      fullName: personalDetails.fullName,
      email: personalDetails.emailAddress,
      phone: personalDetails.phoneNumber,
      location: personalDetails.preferredDriverLocation,
      requestDetails: requestDetailsHtml.replace(/<[^>]+>/g, ""), // Store plain text version in Sanity
      submittedAt: new Date().toISOString(),
    });

    // 2. Send Admin Email with HTML content
    await sendDriverRequestMail({
      html: requestDetailsHtml,
      emailData: {
        fullName: personalDetails.fullName,
        email: personalDetails.emailAddress,
        phone: personalDetails.phoneNumber,
        location: personalDetails.preferredDriverLocation,
        requestDetails: requestDetailsHtml,
      },
    });

    // 3. Send Confirmation Email to Customer
    await sendCustomerEmail({
      fullName: personalDetails.fullName,
      to: personalDetails.emailAddress,
    });

    return NextResponse.json(
      { message: "Submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
