import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Truck } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">About Empire Smoke</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your trusted source for premium tobacco and vape products. We deliver quality, authenticity, and exceptional service to our customers.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="mb-12">
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              To provide our customers with the highest quality tobacco and vape products while maintaining the highest standards of safety, legality, and customer satisfaction. We are committed to age verification, product authenticity, and responsible business practices.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Age Verification</h3>
            <p className="text-sm text-muted-foreground">
              Strict age verification (21+) for all purchases to ensure compliance and safety.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Premium Quality</h3>
            <p className="text-sm text-muted-foreground">
              Only authentic, high-quality products from trusted manufacturers and suppliers.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Fast Delivery</h3>
            <p className="text-sm text-muted-foreground">
              Quick and discreet shipping to get your products to you as soon as possible.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Expert Support</h3>
            <p className="text-sm text-muted-foreground">
              Knowledgeable customer service team ready to assist with any questions or concerns.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Company Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Empire Smoke Distributors was founded with a simple mission: to provide tobacco and vape enthusiasts with access to premium products they can trust. We understand that in this industry, quality and authenticity are paramount.
            </p>
            <p>
              Our team consists of industry veterans who have been working in tobacco and vape distribution for over a decade. This experience allows us to curate the best selection of products and provide expert guidance to our customers.
            </p>
            <p>
              We work directly with manufacturers and suppliers to ensure that every product we offer meets our strict quality standards. From premium cigars to the latest vape innovations, we stand behind everything we sell.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Us</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-foreground">Authentic Products</h4>
                <p className="text-sm text-muted-foreground">Every product is verified for authenticity and quality.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-foreground">Competitive Pricing</h4>
                <p className="text-sm text-muted-foreground">We offer the best prices without compromising on quality.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-foreground">Discreet Shipping</h4>
                <p className="text-sm text-muted-foreground">Your privacy is important to us. All orders are shipped discreetly.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-foreground">Legal Compliance</h4>
                <p className="text-sm text-muted-foreground">We strictly follow all local and federal regulations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center">
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our customer service team is here to help. Contact us anytime with questions about our products or services.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Contact Us
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;