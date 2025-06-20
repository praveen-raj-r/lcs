import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const PRODUCT_OPTIONS = [
  { label: "Heavy equipment", value: "heavy-equipment" },
  {
    label: "Safety critical sensors",
    value: "safety-critical-sensors",
  },
  {
    label: "Fleet IOT Dashboard",
    value: "fleet-iot-dashboard",
  },
  { label: "Check Weigher", value: "check-weigher" },
  { label: "Bagging System", value: "bagging-system" },
  { label: "Batching System", value: "batching-system" },
  {
    label: "Smart Counting System",
    value: "smart-counting-system",
  },
  {
    label: "Weight Transmitter",
    value: "weight-transmitter",
  },
  {
    label: "Weight Indicator",
    value: "weight-indicator",
  },
  {
    label: "Universal Controller",
    value: "universal-controller",
  },
  {
    label: "Weight Bridge Terminal",
    value: "weight-bridge-terminal",
  },
  {
    label: "keepFit BMI Scale",
    value: "keep-fit-bmi-scale",
  },
  {
    label: "AccuFit Recruitment Scale",
    value: "accuFit-recruitment-scale",
  },
];

const SOURCE_OPTIONS = [
  { label: "Web", value: "web" },
  { label: "Organic Search", value: "organic-search" },
  { label: "Email", value: "email" },
  { label: "Phone", value: "phone" },
  { label: "Chat", value: "chat" },
  { label: "Web Form", value: "web-form" },
  { label: "Referral", value: "referral" },
  { label: "Direct", value: "direct" },
  { label: "Paid Search", value: "paid-search" },
  { label: "Blogs", value: "blogs" },
  { label: "Social Media", value: "social-media" },
  { label: "Display Ads", value: "display-ads" },
  { label: "Events", value: "events" },
  { label: "Webinar", value: "webinar" },
  {
    label: "Facebook Lead Form",
    value: "facebook-lead-form",
  },
];

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  mobileNumber: z
    .string()
    .min(10, { message: "Mobile number must be at least 10 digits." })
    .max(15, { message: "Mobile number can't exceed 15 digits." })
    .regex(/^[0-9]{10,15}$/, {
      message: "Please enter a valid mobile number.",
    }),
  interestedProduct: z.string().min(3, {
    message: "Please select a valid product.",
  }),
  source: z.string().min(3, {
    message: "Please select a valid source.",
  }),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Check to further procedure",
  }),
});

const SalesForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobileNumber: "",
      interestedProduct: "",
      source: "",
      items: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      console.log(values);
      // await API call
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col justify-between gap-10 h-full"
        >
          <div className="space-y-4 h-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-semibold">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="John Doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-semibold">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input autoComplete="off" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-semibold">
                    Mobile Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="9876543210"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="interestedProduct"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-semibold">
                    Primary Product Interested
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {PRODUCT_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="source"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[16px] font-semibold">
                    Source
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a source" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {SOURCE_OPTIONS.map((opt) => (
                        <SelectItem value={opt.value} key={opt.label}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="items"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-5">
                    <Checkbox
                      className="data-[state=checked]:bg-[#d90429] border-black rounded-none data-[state=checked]:border-[#d90429]"
                      checked={field.value.includes("recents")}
                      onCheckedChange={(checked) => {
                        const updated = checked
                          ? [...field.value, "recents"]
                          : field.value.filter((i) => i !== "recents");
                        field.onChange(updated);
                      }}
                    />
                    <FormLabel className="text-sm font-normal">
                      I agree to receive communication on newsletters,
                      promotions, and events.
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex md:flex-row flex-col justify-center md:justify-between gap-2 sm:gap-10 items-center">
            <p className="text-[15px]  font-medium leading-[24px] text-[#1D1D1F]">
              By clicking “Talk to LCS’, I acknowledge I have read and
              understand the{" "}
              <Link className="text-[#D90429]" to="/privacy-policy">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link className="text-[#D90429]" to="/terms-of-service">
                Terms and Conditions
              </Link>
            </p>
            <Button
              className="bg-[#D90429] rounded-[26.67px] hover:bg-[#D90429]/90 font-semibold text-[15px] leading-[24px]"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Talk to LCS"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SalesForm;
