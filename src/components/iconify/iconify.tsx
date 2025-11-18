import { Icon } from "@iconify/react";
// utils
import { cn } from "@/utils/tw-merge";
//
import type { IconifyProps } from "./types";

// ----------------------------------------------------------------------

interface Props {
  icon: IconifyProps;
  className?: string;
}

const Iconify = ({ icon, className = "size-5" }: Props) => (
  <div className={cn("component-iconify", className)}>
    <Icon icon={icon} className="w-full h-full" />
  </div>
);

export default Iconify;
