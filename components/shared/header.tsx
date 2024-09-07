import React from "react";
import { Container } from "./container";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";
interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                can&apos;t be taster
              </p>
            </div>
          </div>
        </Link>

    <div className="mx-10 flex-1">
      <SearchInput/>
    </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Login
          </Button>

          <div>
            <Button className="group relative">
              <p>10 $</p>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
