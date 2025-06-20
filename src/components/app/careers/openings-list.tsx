import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import openings from "@/data/openings";
import { useNavigate } from "react-router-dom";

const OpeningsList = () => {
  const navigate = useNavigate();

  return (
    <div className="py-10">
      <Table className="text-xs sm:text-lg sm:leading-[28px] text-[#1D1D1F]">
        <TableHeader>
          <TableRow className="font-semibold !border-0 hover:bg-transparent">
            <TableHead className="w-[100px] py-4.5">Role</TableHead>
            <TableHead className="text-center">Team</TableHead>
            <TableHead className="text-center">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border border-[#E5E5E5] rounded-[10px] shadow-[-5px_0px_32.8px_0px_#0000001A]">
          {openings.map((opening) => (
            <TableRow
              className="border-0 cursor-pointer hover:bg-[#f0ece6] even:hover:bg-[#f0ece6] even:bg-[#F8F7F5]"
              onClick={() => {
                navigate(opening.link);
              }}
            >
              <TableCell className="text-[#0792B4] font-medium py-4.5">
                {opening.role}
              </TableCell>
              <TableCell className="text-center">{opening.team}</TableCell>
              <TableCell className="text-center">{opening.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OpeningsList;
