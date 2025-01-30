import { LoaderCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "./button";

interface ButtonProps {
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, children, className }: ButtonProps) => {
  return (
    <Button type="submit" disabled={isLoading} className={className}>
      {isLoading ? (
        <div className="flex items-center gap-4">
          <LoaderCircleIcon className="animate-spin" />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
