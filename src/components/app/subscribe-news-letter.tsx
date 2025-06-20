/* eslint-disable @typescript-eslint/no-explicit-any */
import subscribeBg from "@/assets/subscribe-bg.png";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

const SubscribeNewsLetter = () => {
  return (
    <div>
      <div
        className="bg-[#FFF1D0] justify-center bg-no-repeat bg-cover bg-center sm:flex hidden"
        style={{ backgroundImage: `url(${subscribeBg})` }}
      >
        <Container />
      </div>
      <div className="bg-[#FFF1D0] justify-center bg-no-repeat bg-cover bg-center flex sm:hidden">
        <Container />
      </div>
    </div>
  );
};
const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid Email address",
  }),
});
interface FormData {
  email: string;
}
const simulatedApi = (
  data: FormData
): Promise<{ success: boolean; data?: FormData; message?: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error response
      if (Math.random() < 0.5) {
        reject({ message: "Server error occurred. Please try again." });
      } else {
        resolve({ success: true, data });
      }
    }, 2000);
  });
};
const Container = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await simulatedApi({ email: data.email });
      console.log("Success:", response);
    } catch (error: any) {
      console.error("Error:", error);
      form.setError("root", {
        type: "manual",
        message: error.message,
      });
    }
  }
  return (
    <div className="max-w-5xl mx-4 w-full">
      <div className="w-full flex h-full items-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="h-full w-full flex-col flex items-start sm:pl-10 justify-center space-y-5 py-10 sm:py-20"
          >
            <h4 className="text-black font-semibold text-[26px] leading-[32px]">
              Subscribe to our newsletter.
            </h4>
            <p className="max-w-[250px] text-[#111111] font-medium text-lg leading-[28px]">
              Get product updates and news in your inbox. No spam.
            </p>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="w-full">
                    <Input
                      {...field}
                      className="h-14 py-3.5 px-4 bg-[#D904290D] border border-[#D904291A] font-medium text-xl placeholder:text-black/80 placeholder:text-lg"
                      type="email"
                      placeholder="@gmail.com"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="cursor-pointer h-[50.9px] text-white rounded-[10px] bg-[#D90429] py-[14px] px-10"
            >
              Subscribe
            </button>
          </form>
        </Form>
        <div className="h-full w-full sm:block hidden"></div>
      </div>
    </div>
  );
};

export default SubscribeNewsLetter;
