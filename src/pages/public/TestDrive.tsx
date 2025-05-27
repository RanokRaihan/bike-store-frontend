import TestDriveForm from "@/components/forms/TestDriveForm";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarDays,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Star,
  Users,
} from "lucide-react";

const TestDrive = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Free Test Ride",
      description: "Experience any bike from our collection at no cost",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our trained staff will guide you through the experience",
    },
    {
      icon: Star,
      title: "No Obligation",
      description: "Test drive with no pressure to purchase",
    },
  ];

  return (
    <main className="min-h-content bg-gray-50">
      <div className="container mx-auto p-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Free Test Drive
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Schedule Your Test Drive
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the perfect bike before you buy. Book a free test drive
            and feel the difference our quality bikes can make in your riding
            experience.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form - Left Side */}
          <TestDriveForm />

          {/* Information Panel - Right Side */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">Duration</h4>
                      <p className="text-gray-600 text-sm">
                        Test rides typically last 15-30 minutes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">Safety First</h4>
                      <p className="text-gray-600 text-sm">
                        Helmets and safety gear provided
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">Expert Guidance</h4>
                      <p className="text-gray-600 text-sm">
                        Our staff will accompany you throughout
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Available Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Test Drive Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: "Downtown Store",
                    address: "123 Main Street, Dhaka 1000",
                    phone: "+880 1234-567890",
                  },
                  {
                    name: "Gulshan Branch",
                    address: "456 Gulshan Avenue, Dhaka 1212",
                    phone: "+880 1234-567891",
                  },
                  {
                    name: "Chittagong Store",
                    address: "789 Port Road, Chittagong 4000",
                    phone: "+880 1234-567892",
                  },
                ].map((location, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-primary">
                      {location.name}
                    </h4>
                    <p className="text-sm text-gray-600">{location.address}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {location.phone}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-amber-800">
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-2">
                <p className="text-sm">• Valid ID required for test drives</p>
                <p className="text-sm">• Minimum age requirement: 18 years</p>
                <p className="text-sm">• Please arrive 10 minutes early</p>
                <p className="text-sm">• Comfortable clothing recommended</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestDrive;
