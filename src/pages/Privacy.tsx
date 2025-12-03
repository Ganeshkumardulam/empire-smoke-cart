import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Personal Information</h4>
              <p className="text-muted-foreground">
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, phone number, shipping address, and payment information.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Usage Information</h4>
              <p className="text-muted-foreground">
                We automatically collect certain information about your use of our website, including your IP address, browser type, operating system, referring URLs, and browsing behavior.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Age Verification</h4>
              <p className="text-muted-foreground">
                As required by law for tobacco and vape products, we verify that all customers are 21 years of age or older. This may include collecting date of birth information.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Order Processing</h4>
              <p className="text-muted-foreground">
                To process and fulfill your orders, including payment processing, shipping, and delivery confirmation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Customer Service</h4>
              <p className="text-muted-foreground">
                To respond to your inquiries, provide customer support, and resolve any issues with your orders or account.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Legal Compliance</h4>
              <p className="text-muted-foreground">
                To comply with legal requirements, including age verification laws and regulations governing tobacco and vape product sales.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Website Improvement</h4>
              <p className="text-muted-foreground">
                To analyze website usage, improve our services, and develop new features that better serve our customers.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Information Sharing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>With service providers who help us operate our business (payment processors, shipping companies, etc.)</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>In connection with a business transfer or acquisition</li>
              <li>With your explicit consent</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>SSL encryption for all data transmission</li>
              <li>Secure payment processing through certified providers</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              You have the right to:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Access and review your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request data portability</li>
            </ul>

            <p className="text-muted-foreground">
              To exercise these rights, please contact us using the information provided in our Contact page.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cookies and Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
            </p>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Essential Cookies</h4>
              <p className="text-muted-foreground">
                Required for basic website functionality, including account login and shopping cart functionality.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Analytics Cookies</h4>
              <p className="text-muted-foreground">
                Help us understand how visitors use our website so we can improve the user experience.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these external sites or services. We encourage you to review their privacy policies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Our services are not intended for individuals under 21 years of age. We do not knowingly collect personal information from children under 21. If we become aware that we have collected personal information from a child under 21, we will take steps to delete such information.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>

            <div className="bg-muted p-4 rounded-lg">
              <p className="font-medium">Empire Smoke Distributors</p>
              <p>Email: privacy@empiresmoke.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Premium Avenue, Suite 456, New York, NY 10001</p>
            </div>

            <p className="text-sm text-muted-foreground">
              Last Updated: December 3, 2024
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;