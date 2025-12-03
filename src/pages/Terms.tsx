import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Please read these terms carefully before using our services. By accessing or using Empire Smoke, you agree to be bound by these terms.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              By accessing and using the Empire Smoke Distributors website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Age Verification and Legal Compliance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Age Requirement</h4>
              <p className="text-muted-foreground">
                You must be at least 21 years old to purchase tobacco and vape products from Empire Smoke. By using our services, you certify that you are 21 years of age or older.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Legal Compliance</h4>
              <p className="text-muted-foreground">
                All tobacco and vape products sold through our website comply with federal, state, and local laws and regulations. We reserve the right to refuse service to anyone who violates these laws.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Use License</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Permission is granted to temporarily access the materials (information or software) on Empire Smoke's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Product Information and Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Product Descriptions</h4>
              <p className="text-muted-foreground">
                We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions or other content on our website is accurate, complete, reliable, current, or error-free.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Pricing</h4>
              <p className="text-muted-foreground">
                All prices are subject to change without notice. We reserve the right to modify or discontinue products without notice. We are not responsible for pricing errors.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Orders and Payment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Order Acceptance</h4>
              <p className="text-muted-foreground">
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product information, or payment issues.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Payment Terms</h4>
              <p className="text-muted-foreground">
                Payment is due at the time of order. We accept major credit cards and other payment methods as indicated on our website. All payments are processed securely through certified payment processors.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shipping and Delivery</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Shipping Policy</h4>
              <p className="text-muted-foreground">
                We will make reasonable efforts to deliver products within the estimated timeframe. However, delivery dates are estimates only and we are not liable for delays caused by factors beyond our control.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Shipping Restrictions</h4>
              <p className="text-muted-foreground">
                Due to legal restrictions, we cannot ship tobacco and vape products to certain locations. It is your responsibility to ensure that delivery to your location is legal and permitted.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Returns and Refunds</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Return Policy</h4>
              <p className="text-muted-foreground">
                Due to the nature of tobacco and vape products, we generally do not accept returns unless the product is defective or damaged. Please inspect your order upon delivery.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Refund Policy</h4>
              <p className="text-muted-foreground">
                Refunds will be processed within 5-7 business days of approval. Refunds will be issued to the original payment method. Shipping charges are non-refundable unless the return is due to our error.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The materials on Empire Smoke's website are provided on an 'as is' basis. Empire Smoke makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Limitations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              In no event shall Empire Smoke or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Empire Smoke's website, even if Empire Smoke or a Empire Smoke authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accuracy of Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The materials appearing on Empire Smoke's website could include technical, typographical, or photographic errors. Empire Smoke does not warrant that any of the materials on its website are accurate, complete, or current. Empire Smoke may make changes to the materials contained on its website at any time without notice.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Modifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Empire Smoke may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Governing Law</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              These terms and conditions are governed by and construed in accordance with the laws of New York, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-medium">Empire Smoke Distributors</p>
              <p>Email: legal@empiresmoke.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Premium Avenue, Suite 456, New York, NY 10001</p>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Last Updated: December 3, 2024
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;