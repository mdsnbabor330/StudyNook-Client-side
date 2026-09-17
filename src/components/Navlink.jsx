"use client";

import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <div>
      <a href={href} className={pathname === href ? "text-[#1C3557] font-medium" : "text-black text-[16px]"}>
        {children}
      </a>
    </div>
  );
};

export default Navlink;