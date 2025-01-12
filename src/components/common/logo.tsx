import { cn } from "@/lib/utils";
import Link from "next/link";

type LogoProps = {
  className?: string;
};
export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={cn("text-2xl font-bold", className)}>
      Logo
    </Link>
  );
};
