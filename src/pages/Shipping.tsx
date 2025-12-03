import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, Shield, MapPin } from "lucide-react";

const Shipping = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Shipping Information</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Fast, reliable, and discreet shipping for all your premium tobacco and vape products.
        </p>
      </div>

      {/* Shipping Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="relative">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              Standard Shipping
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Delivery Time</span>
                <Badge variant="secondary">3-5 Business Days</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Cost</span>
                <span className="font-semibold">$9.99</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Free Shipping</span>
                <span className="font-semibold text-green-600">Over $75</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative border-primary">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Express Shipping
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Delivery Time</span>
                <Badge variant="secondary">1-2 Business Days</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Cost</span>
                <span className="font-semibold">$19.99</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Free Shipping</span>
                <span className="font-semibold text-green-600">Over $150</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Overnight Shipping
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Delivery Time</span>
                <Badge variant="secondary">Next Business Day</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Cost</span>
                <span className="font-semibold">$39.99</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Free Shipping</span>
                <span className="font-semibold text-green-600">Over $300</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Shipping Policies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Shipping Policies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Processing Time</h4>
              <p className="text-sm text-muted-foreground">
                Orders are typically processed within 1-2 business hours. During peak times, processing may take up to 24 hours.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Shipping Restrictions</h4>
              <p className="text-sm text-muted-foreground">
                Due to legal restrictions, we cannot ship tobacco and vape products to certain states or countries. Please check our shipping eligibility during checkout.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">International Shipping</h4>
              <p className="text-sm text-muted-foreground">
                We currently ship to select international destinations. Additional customs fees and duties may apply. Contact us for specific shipping quotes.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Delivery Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Package Tracking</h4>
              <p className="text-sm text-muted-foreground">
                Once your order ships, you'll receive a tracking number via email. You can track your package in real-time through our website or the carrier's website.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Signature Required</h4>
              <p className="text-sm text-muted-foreground">
                All tobacco and vape product shipments require an adult signature (21+) upon delivery for legal compliance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Delivery Attempts</h4>
              <p className="text-sm text-muted-foreground">
                Carriers will make up to 3 delivery attempts. If delivery fails, the package will be held at the carrier's facility for pickup.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Discreet Packaging */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Discreet Packaging & Privacy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Your Privacy Matters</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Plain, unmarked packaging with no product identification</li>
                <li>• No mention of tobacco or vape products on shipping labels</li>
                <li>• Secure, tamper-evident packaging to ensure product integrity</li>
                <li>• Adult signature required for all deliveries</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Quality Assurance</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Climate-controlled shipping for temperature-sensitive products</li>
                <li>• Insurance coverage on all shipments</li>
                <li>• Careful handling to prevent damage</li>
                <li>• 100% satisfaction guarantee on all orders</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <div className="text-center">
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Shipping?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Our shipping team is here to help. Contact us for specific shipping quotes, delivery updates, or any shipping-related questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Contact Shipping Team
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
              >
                Call: (555) 123-4567
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Shipping;