import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useMoveBack } from "@/hooks/use-move-back";
import lcsLogo from "@/assets/lcs-logo.svg";
function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="max-h-screen h-screen w-full bg-black text-white flex justify-center items-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex justify-center items-center">
          <img src={lcsLogo} alt="LCS Logo" className="h-10" />
        </div>
        <div className="flex items-center gap-5">
          <span className="text-white text-2xl font-bold">404</span>
          <Separator className="!h-10 bg-white" orientation="vertical" />
          <p className="text-base text-white">This page could not be found.</p>
        </div>

        <div>
          <Button
            onClick={moveBack}
            variant="destructive"
            className="cursor-pointer"
            size="sm"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
