"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { github } from "@/utils/icons";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";
import SearchDialog from "./SearchDialog/SearchDialog";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />

        <div className="btn-group flex items-center gap-2">
          <ThemeDropdown />
          <Button
            className="flex items-center gap-2"
            onClick={() => {
              router.push("https://nextjs.org/learn/dashboard-app");
            }}
          >
            {github} Credit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
