import { Button } from "../ui/button";
import { Input } from "../ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl mb-8 text-gray-300">
            Get the latest updates on new arrivals, cycling tips, and exclusive
            offers
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-black"
            />
            <Button size="lg" variant="secondary">
              Subscribe
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            No spam, unsubscribe at any time
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
