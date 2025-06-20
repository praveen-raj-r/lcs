import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState, type FC } from "react";

interface CopyToClipboardProps {
  text: string;
  successDuration?: number; // how long to show success state (ms)
}

const CopyToClipboard: FC<CopyToClipboardProps> = ({
  text,
  successDuration = 2000,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), successDuration);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      className="bg-gray-600/40 hover:bg-gray-600/70 cursor-pointer"
      size="sm"
    >
      {copied ? (
        <Check className="w-4 h-4 mr-2" />
      ) : (
        <Copy className="w-4 h-4 mr-2" />
      )}
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
};

export default CopyToClipboard;
