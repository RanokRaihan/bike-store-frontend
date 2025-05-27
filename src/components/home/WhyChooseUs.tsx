import { Award, Shield, Users, Wrench } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Knowledge",
      description: "Over 15 years of experience in the cycling industry",
    },
    {
      icon: Users,
      title: "Trusted by 10,000+ Customers",
      description: "Join our community of satisfied cyclists nationwide",
    },
    {
      icon: Wrench,
      title: "Professional Service",
      description: "Certified mechanics and comprehensive repair services",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All bikes come with extended warranty and support",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Why Choose MOTO VIBE?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're not just a bike store - we're your cycling partners committed
            to providing the best bikes and services for your adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
