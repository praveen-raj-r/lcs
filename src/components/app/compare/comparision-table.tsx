/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleX, Tv } from "lucide-react";

const BuiltInApplication = ({ applicableStatus }: any) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      {applicableStatus ? (
        <CircleCheck stroke="#0AA734" size={20} />
      ) : (
        <CircleX stroke="#D6062A" size={20} />
      )}
      <p className="text-center text-wrap font-medium text-[15px] leading-[24px]">
        {applicableStatus
          ? "Multiple built-in \n applications"
          : "Not Applicable"}
      </p>
    </div>
  );
};

const ConversionRate = ({ rate }: any) => {
  return (
    <div className="flex flex-col gap-[1px] items-center text-[15px] font-medium leading-[24px] text-center">
      <p>Upto</p>
      <p className="font-semibold text-lg leading-[28px]"> {rate}</p>
      <p>samples/Sec</p>
    </div>
  );
};

const IconComponent = ({ applicableStatus }: any) => {
  return (
    <div className="flex justify-center items-center">
      {applicableStatus ? (
        <CircleCheck stroke="#0AA734" size={20} />
      ) : (
        <CircleX stroke="#D6062A" size={20} />
      )}
    </div>
  );
};

const NumberComponent = ({ range }: any) => {
  return (
    <div className="flex justify-center items-center font-semibold text-lg leading-[28px]">
      {range}
    </div>
  );
};

const allComponentsTrue = [
  { element: <IconComponent applicableStatus={true} /> },
  { element: <IconComponent applicableStatus={true} /> },
  { element: <IconComponent applicableStatus={true} /> },
  { element: <IconComponent applicableStatus={true} /> },
];

const rows = [
  {
    rowIcon: "",
    title: "Built-in Application",
    description: "",
    items: [
      { element: <BuiltInApplication applicableStatus={false} /> },
      { element: <BuiltInApplication applicableStatus={false} /> },
      { element: <BuiltInApplication applicableStatus={true} /> },
      { element: <BuiltInApplication applicableStatus={true} /> },
    ],
  },
  {
    rowIcon: "",
    title: "Conversion Rate",
    description: "",
    items: [
      { element: <ConversionRate rate={400} /> },
      { element: <ConversionRate rate={10} /> },
      { element: <ConversionRate rate={400} /> },
      { element: <ConversionRate rate={10} /> },
    ],
  },
  {
    rowIcon: "",
    title: "Analog Output",
    description: "0-5V/0-10V,\n 1-5V/2-10V,\n 0-20mA, 4-20mA",
    items: [
      { element: <IconComponent applicableStatus={false} /> },
      { element: <IconComponent applicableStatus={true} /> },
      { element: <IconComponent applicableStatus={false} /> },
      { element: <IconComponent applicableStatus={true} /> },
    ],
  },
  {
    rowIcon: "",
    title: "Analog Output",
    description:
      " 0-5V / 0-10V,\n 1-5V / 2-10V,\n ± 5V, ± 10V,\n 0-20mA, 4-20mA",
    items: [
      { element: <IconComponent applicableStatus={true} /> },
      { element: <IconComponent applicableStatus={false} /> },
      { element: <IconComponent applicableStatus={true} /> },
      { element: <IconComponent applicableStatus={false} /> },
    ],
  },
  {
    rowIcon: "",
    title: "Communication",
    description: "RS485 (Half Duplex) / RS232 Ports ",
    items: allComponentsTrue,
  },
  {
    rowIcon: "",
    title: "Protocols",
    description: "LCS DUMP, MODBUS RTU, ASCII Protocol",
    items: allComponentsTrue,
  },
  {
    rowIcon: "",
    title: "Division",
    description: "1 in 10000",
    items: allComponentsTrue,
  },
  {
    rowIcon: "",
    title: "Display Range",
    description: "+99999 ( Digit )",
    items: [
      { element: <NumberComponent range={6} /> },
      { element: <NumberComponent range={5} /> },
      { element: <NumberComponent range={6} /> },
      { element: <NumberComponent range={5} /> },
    ],
  },
  {
    rowIcon: "",
    title: "Operating Voltage",
    description: "24V DC / 2A",
    items: allComponentsTrue,
  },
  {
    rowIcon: "",
    title: "Input",
    description: "Logic Input",
    items: [
      { element: <IconComponent applicableStatus={false} /> },
      { element: <IconComponent applicableStatus={false} /> },
      { element: <NumberComponent range={3} /> },
      { element: <NumberComponent range={2} /> },
    ],
  },
  {
    rowIcon: "",
    title: "Output",
    description: "Relay Output",
    items: [
      { element: <IconComponent applicableStatus={false} /> },
      { element: <IconComponent applicableStatus={false} /> },
      { element: <NumberComponent range={3} /> },
      { element: <NumberComponent range={2} /> },
    ],
  },
];

const ComparisionTable = () => {
  return (
    <div className="shadow-[0px_13px_32px_0px_#00000026] mx-3">
      <Table className="[--border:#C5C4C4]">
        <TableHeader>
          <TableRow className="*:text-[#D90429] *:text-center *:border *:border-t-0 *:font-medium *:text-[26px] *:leading-[32px] *:py-4 *:border-dashed">
            <TableHead className="px-6.5 border-l-0 !text-left" rowSpan={2}>
              Features
            </TableHead>
            <TableHead colSpan={2}>Weight Transmitter</TableHead>
            <TableHead className="!border-r-0" colSpan={2}>
              Weight Indicator
            </TableHead>
          </TableRow>
          <TableRow className="*:font-semibold text-lg leading-[28px] *:py-4 *:border border-dashed *:border-dashed *:text-center">
            <TableHead>WT-400VP</TableHead>
            <TableHead>WT-10N</TableHead>
            <TableHead>WI-400VP</TableHead>
            <TableHead className="!border-r-0">WI-10N</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row: any) => {
            return (
              <TableRow
                key={row.title}
                className="*:border *:border-dashed *:text-center *:py-4"
              >
                <TableCell className="!text-left px-6.5 !border-l-0">
                  <div className="flex flex-col gap-4 *:font-semibold text-[15px] leading-[24px]">
                    <div className="flex items-center gap-3">
                      <Tv size={20} />
                      <span>{row.title}</span>
                    </div>

                    <p className="text-[#6A6A6A] text-pretty">
                      {row.description}
                    </p>
                  </div>
                </TableCell>
                {row.items.map((el: any, idx: any) => {
                  return (
                    <TableCell
                      key={`${row.title}-${idx}`}
                      className={cn(
                        row.items.length === idx + 1 && "!border-r-0"
                      )}
                    >
                      {el.element}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisionTable;
