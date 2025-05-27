import CustomFormField from "@/components/ui/CustomFormField";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SubmitButton from "@/components/ui/SubmitButton";
import { Textarea } from "@/components/ui/textarea";
import { FormFieldType } from "@/types/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const testDriveSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  bikeCategory: z.string().min(1, "Please select a bike category"),
  location: z.string().min(1, "Please select a location"),
  experience: z.string().min(1, "Please select your riding experience"),
  additionalNotes: z.string().optional(),
});

const TestDriveForm = () => {
  const form = useForm<z.infer<typeof testDriveSchema>>({
    resolver: zodResolver(testDriveSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      bikeCategory: "",
      location: "",
      experience: "",
      additionalNotes: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof testDriveSchema>) => {
    try {
      // Here you would typically send the form data to your backend
      console.log("Test drive booking:", values);
      toast.success(
        "Test drive booked successfully! We'll contact you soon to confirm."
      );
      form.reset();
    } catch (err) {
      const error = err as Error;
      toast.error(
        error.message || "Failed to book test drive. Please try again."
      );
    }
  };

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const bikeCategories = [
    "Mountain Bike",
    "Road Bike",
    "Hybrid Bike",
    "Electric Bike",
    "BMX",
    "Folding Bike",
  ];

  const locations = [
    "Downtown Store - Dhaka",
    "Gulshan Branch - Dhaka",
    "Chittagong Store",
  ];

  const experienceLevels = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Professional",
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Book Your Test Drive
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomFormField
              name="fullName"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              type="text"
              placeholder="John Doe"
              label="Full Name"
            />

            <CustomFormField
              name="email"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              type="email"
              placeholder="john@example.com"
              label="Email Address"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomFormField
              name="phone"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              type="tel"
              placeholder="+880 1234-567890"
              label="Phone Number"
            />

            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date</Label>
              <CustomFormField
                name="preferredDate"
                control={form.control}
                fieldType={FormFieldType.INPUT}
                type="date"
                placeholder=""
                label=""
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Time</Label>
              <Select
                onValueChange={(value) => form.setValue("preferredTime", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.preferredTime && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.preferredTime.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="bikeCategory">Bike Category</Label>
              <Select
                onValueChange={(value) => form.setValue("bikeCategory", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select bike type" />
                </SelectTrigger>
                <SelectContent>
                  {bikeCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.bikeCategory && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.bikeCategory.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Test Drive Location</Label>
              <Select
                onValueChange={(value) => form.setValue("location", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.location && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.location.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Riding Experience</Label>
              <Select
                onValueChange={(value) => form.setValue("experience", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.experience && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.experience.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
            <Textarea
              id="additionalNotes"
              placeholder="Any specific requirements or questions..."
              className="min-h-24 resize-none"
              {...form.register("additionalNotes")}
            />
          </div>

          <SubmitButton
            className="w-full"
            isLoading={form.formState.isSubmitting}
          >
            Book Test Drive
          </SubmitButton>
        </form>
      </Form>
    </div>
  );
};

export default TestDriveForm;
