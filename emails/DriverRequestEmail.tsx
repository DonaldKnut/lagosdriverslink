import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Section,
  Row,
  Column,
} from "@react-email/components";

type Props = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  requestDetails: string;
};

export default function DriverRequestEmail({
  fullName,
  email,
  phone,
  location,
  requestDetails,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>New Driver Request Submitted - LagosDriversLink</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Row>
              <Column align="center">
                <Heading style={heading}>🚖 New Driver Request</Heading>
                <Text style={subHeading}>
                  LagosDriversLink - Professional Driver Hire
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Text style={paragraph}>Hello Team,</Text>
            <Text style={paragraph}>
              You have received a new driver hire request. Here are the details:
            </Text>

            {/* Details Card */}
            <Section style={card}>
              <Row>
                <Column>
                  <Text style={label}>Client Name</Text>
                  <Text style={value}>{fullName}</Text>
                </Column>
              </Row>
              <Row style={rowSpacing}>
                <Column width="50%">
                  <Text style={label}>Email Address</Text>
                  <Text style={value}>{email}</Text>
                </Column>
                <Column width="50%">
                  <Text style={label}>Phone Number</Text>
                  <Text style={value}>{phone}</Text>
                </Column>
              </Row>
              <Row style={rowSpacing}>
                <Column>
                  <Text style={label}>Location</Text>
                  <Text style={value}>{location}</Text>
                </Column>
              </Row>
            </Section>

            {/* Request Details */}
            <Section style={detailsSection}>
              <Text style={sectionTitle}>Request Details</Text>
              <Hr style={divider} />
              <Text style={detailsText}>{requestDetails}</Text>
            </Section>

            <Text style={footerText}>
              Please respond to this request within 24 hours.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerNote}>
              LagosDriversLink &copy; {new Date().getFullYear()}
            </Text>
            <Text style={footerNote}>123 Driver Avenue, Lagos, Nigeria</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#0a0a0a",
  color: "#ffffff",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
  padding: "20px 0",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#111111",
  borderRadius: "8px",
};

const header = {
  paddingBottom: "20px",
  borderBottom: "1px solid #1f1f1f",
  marginBottom: "20px",
};

const heading = {
  color: "#f7b500",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 10px 0",
};

const subHeading = {
  color: "#a0a0a0",
  fontSize: "14px",
  margin: "0",
};

const content = {
  padding: "0 0 20px 0",
};

const paragraph = {
  color: "#e0e0e0",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0 0 15px 0",
};

const card = {
  backgroundColor: "#1a1a1a",
  borderRadius: "6px",
  padding: "20px",
  margin: "20px 0",
  borderLeft: "4px solid #f7b500",
};

const label = {
  color: "#a0a0a0",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0 0 5px 0",
};

const value = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 15px 0",
};

const rowSpacing = {
  marginTop: "15px",
};

const detailsSection = {
  margin: "25px 0",
};

const sectionTitle = {
  color: "#f7b500",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 10px 0",
};

const divider = {
  borderColor: "#2a2a2a",
  margin: "10px 0",
};

const detailsText = {
  color: "#d0d0d0",
  fontSize: "15px",
  lineHeight: "1.6",
  backgroundColor: "#1a1a1a",
  padding: "15px",
  borderRadius: "4px",
};

const footerText = {
  color: "#a0a0a0",
  fontSize: "14px",
  textAlign: "center" as const,
  margin: "20px 0 0 0",
};

const footer = {
  borderTop: "1px solid #1f1f1f",
  paddingTop: "20px",
  textAlign: "center" as const,
};

const footerNote = {
  color: "#666666",
  fontSize: "12px",
  margin: "5px 0",
};
