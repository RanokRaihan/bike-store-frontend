import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  RotateCcw,
  Shield,
  Star,
  Truck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Wrench,
      title: "Professional Bike Repair",
      description:
        "Complete maintenance and repair services by certified technicians",
      features: [
        "Brake adjustments and replacements",
        "Gear tuning and shifting optimization",
        "Wheel truing and spoke replacement",
        "Chain and cassette maintenance",
        "Suspension service",
        "Frame alignment",
      ],
      price: "Starting from ৳500",
      duration: "Same day service available",
    },
    {
      icon: Truck,
      title: "Free Home Delivery",
      description: "Fast and secure delivery to your doorstep nationwide",
      features: [
        "Free delivery on orders over ৳50,000",
        "Express delivery available",
        "Professional assembly included",
        "Insurance coverage",
        "Real-time tracking",
        "Contactless delivery option",
      ],
      price: "Free for premium orders",
      duration: "1-3 business days",
    },
    {
      icon: RotateCcw,
      title: "30-Day Easy Returns",
      description: "Hassle-free returns with full refund guarantee",
      features: [
        "No questions asked returns",
        "Free return pickup",
        "Full refund within 7 days",
        "Exchange for different models",
        "Return condition assessment",
        "Store credit options",
      ],
      price: "Free return service",
      duration: "30-day window",
    },
    {
      icon: Shield,
      title: "Extended Warranty",
      description: "Comprehensive coverage for your peace of mind",
      features: [
        "2-year manufacturer warranty",
        "Extended warranty options",
        "Accidental damage protection",
        "Parts replacement coverage",
        "Labor cost coverage",
        "Priority service queue",
      ],
      price: "Plans from ৳2,000",
      duration: "Up to 5 years",
    },
    {
      icon: Zap,
      title: "Bike Customization",
      description:
        "Personalize your bike with premium upgrades and accessories",
      features: [
        "Custom paint jobs",
        "Performance upgrades",
        "Accessory installation",
        "Component upgrades",
        "Lighting systems",
        "Security enhancements",
      ],
      price: "Custom pricing",
      duration: "1-2 weeks",
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Professional guidance to help you choose the perfect bike",
      features: [
        "One-on-one consultations",
        "Riding style assessment",
        "Size and fit recommendations",
        "Budget optimization",
        "Test ride arrangements",
        "Post-purchase support",
      ],
      price: "Free consultation",
      duration: "30-60 minutes",
    },
  ];

  const additionalServices = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock support for urgent bike issues",
    },
    {
      icon: MapPin,
      title: "Mobile Repair Service",
      description: "We come to you for on-location repairs and maintenance",
    },
    {
      icon: Star,
      title: "Premium Membership",
      description: "Exclusive benefits and discounts for loyal customers",
    },
  ];

  return (
    <main className="min-h-content bg-gray-50">
      <div className="container mx-auto p-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Premium Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Complete Bike Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From professional repairs to personalized consultations, we provide
            comprehensive services to keep you riding with confidence and style.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Book a Service</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">Browse Bikes</Link>
            </Button>
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {service.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">
                        {service.price}
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go beyond the basics to provide exceptional value and
              convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Service Process */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Our Service Works
            </h2>
            <p className="text-gray-600">
              Simple, transparent, and professional service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Book Service",
                description:
                  "Schedule online or call us to book your preferred service",
              },
              {
                step: "02",
                title: "Assessment",
                description:
                  "Our experts evaluate your bike and provide detailed estimates",
              },
              {
                step: "03",
                title: "Service",
                description:
                  "Professional work performed with quality parts and tools",
              },
              {
                step: "04",
                title: "Quality Check",
                description:
                  "Thorough testing and quality assurance before delivery",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Premium Service?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with our service team for personalized assistance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Service Team
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
            >
              View Service Locations
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
