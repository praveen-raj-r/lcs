/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomButton from "@/components/app/custom-button";
import Design from "@/components/app/design";
import monitorIcon from "@/assets/job-description/monitor-icon.png";
import teamsIcon from "@/assets/job-description/teams-icon.png";
import clockIcon from "@/assets/job-description/clock-icon.png";
import { useParams } from "react-router-dom";
import openings from "@/data/openings";

const InvalidJob = () => {
  return <div>InvalidJob</div>;
};

const OpeningDescription = () => {
  const { careerId } = useParams();

  const job = openings.find((o) => o.link === careerId);
  const isJobValid = Boolean(job);

  if (!isJobValid) {
    return <InvalidJob />;
  }

  return (
    <div className="w-full flex justify-center pt-12.75">
      <div className="max-w-5xl mx-4 w-full">
        <div className="flex">
          <div className="md:border-r md:pr-7 border-dashed">
            <div className="flex flex-col text-[#1d1d1f]">
              <p className="flex items-center gap-1 font-medium leading-[24px]">
                <span className="text-[#D90429]">Role at LCS</span>
                <span className="text-[#6A6A6A]">/</span>
                <span>Role Details</span>
              </p>
              <h2 className="font-semibold text-3xl sm:text-[56px] sm:leading-[68px] mt-12.75">
                {job?.role}
              </h2>
              <div className="md:mt-10">
                <p className="text-[28px] font-semibold leading-[40px] my-5 sm:my-10">
                  About the team
                </p>
                <div className="block sm:hidden">
                  <JobDetailsCard job={job} />
                </div>
                <p className="text-[#6A6A6A] font-medium text-lg leading-[28px] pt-10 sm:pt-0">
                  {job?.aboutTheTeam}
                </p>
                <h3 className="text-[28px] font-semibold leading-[40px] mt-12.75">
                  What you'll do
                </h3>
                <ul className="text-[#6A6A6A] font-medium text-lg leading-[28px] my-10 list-disc space-y-3">
                  {job?.whatYouWillDo.map((s) => (
                    <li>{s}</li>
                  ))}
                </ul>
                <div className="relative border-t">
                  <Design />
                </div>
                <div className="">
                  <h3 className="text-[28px] font-semibold leading-[40px] mt-12.75">
                    Responsibility
                  </h3>
                  <ul className="list-disc space-y-3 mt-5 mb-10 text-[#6A6A6A] font-medium text-lg leading-[28px]">
                    {job?.responsibilities.map((res) => (
                      <li>{res}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:block hidden">
            <JobDetailsCard job={job} />
          </div>
        </div>
      </div>
    </div>
  );
};

const JobDetailsCard = ({ job }: any) => {
  return (
    <div className="bg-[#F8F7F5] p-5 rounded-[20px] sm:text-[16px] leading-[25px] font-medium flex flex-col gap-4 text-[#1D1D1F]">
      {[
        { icon: monitorIcon, tag: "Working Location", value: job.location },
        { icon: teamsIcon, tag: "Team", value: job.team },
        { icon: clockIcon, tag: "Job Type", value: "Full Time" },
      ].map((detail) => (
        <div key={detail.tag} className="flex gap-3">
          <span className="flex size-5 sm:size-6 justify-center mt-1">
            <img src={detail.icon} className="size-5 sm:size-6" />
          </span>
          <div className="flex flex-col">
            <h5 className="text-nowrap">{detail.tag}</h5>
            <h6 className="font-normal text-[#4A4A4A]">{detail.value}</h6>
          </div>
        </div>
      ))}
      <div>
        <CustomButton className="cursor-no-drop text-nowrap">
          Apply for this role
        </CustomButton>
      </div>
    </div>
  );
};

export default OpeningDescription;
