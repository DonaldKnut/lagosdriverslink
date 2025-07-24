import React from "react";
import { render } from "@react-email/render";
import { resend } from "@/lib/resend";
import DriverRequestEmail from "@/emails/DriverRequestEmail";

// Admin Email (with HTML content)
export const sendDriverRequestMail = async ({
  html,
  emailData,
}: {
  html: string;
  emailData: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    requestDetails: string;
  };
}) => {
  return resend.emails.send({
    from: "LagosDriversLINK <noreply@lagosdriverslink.com>",
    to: "teams@lagosdriverslink.com",
    subject: "New Driver Request Submitted",
    html,
  });
};

// Customer Confirmation Email
export const sendCustomerEmail = async ({
  fullName,
  to,
}: {
  fullName: string;
  to: string;
}) => {
  const html = await render(
    <div
      style={{
        backgroundColor: "#0a0a0a",
        padding: "2rem",
        borderRadius: "1rem",
        color: "#facc15",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ color: "#fde047" }}>Hello {fullName},</h2>
      <p>
        Thank you for submitting your driver request on{" "}
        <strong>LagosDriversLINK</strong>.
      </p>
      <p>
        Our team will contact you within 24 hours to discuss your requirements.
      </p>
      <p style={{ fontSize: "13px", color: "#eab308" }}>
        Need urgent help? Call or WhatsApp us at 0800-DRIVER-NOW.
      </p>
    </div>
  );

  return resend.emails.send({
    from: "LagosDriversLINK <noreply@lagosdriverslink.com>",
    to,
    subject: "Your Driver Request Has Been Received",
    html,
  });
};
