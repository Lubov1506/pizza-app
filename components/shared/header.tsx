import { cn } from "@/app/lib/utils";
import React from "react";
import { Container } from "./container";
import { Image } from "lucide-react";
interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return <div className={cn('border border-b', className)}>
    <Container className="flex items-center justify-between py-8">
    <div>
        <Image src="/logo.png" alt="" />
    </div>
    </Container>
  </div>;
};
