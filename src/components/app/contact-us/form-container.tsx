import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SalesForm from "./sales-form";
import SupportForm from "./support-form";

const FormContainer = () => {
  const triggerButtonClass =
    "cursor-pointer h-[40px] flex justify-center font-medium rounded-[26.67px] items-center px-4 data-[state=active]:bg-[#D90429] transition-colors duration-500 data-[state=active]:text-white border border-[#D90429]";

  const triggerButtons = [
    { label: "Sales", value: "sales" },
    { label: "Support", value: "support" },
  ];

  return (
    <div className="shadow-[-5px_0px_32.8px_0px_#0000001A] p-8 h-full">
      <Tabs defaultValue="sales" className="w-full h-full">
        <div className="w-full flex justify-center">
          <TabsList className="text-[15px] leading-[24px] space-x-5">
            {triggerButtons.map((trigger) => (
              <TabsTrigger
                key={trigger.value}
                className={triggerButtonClass}
                value={trigger.value}
              >
                {trigger.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="sm:p-5 pt-5 h-full">
          <TabsContent className="h-full" value="sales">
            <SalesForm />
          </TabsContent>
          <TabsContent className="h-full" value="support">
            <SupportForm />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FormContainer;
