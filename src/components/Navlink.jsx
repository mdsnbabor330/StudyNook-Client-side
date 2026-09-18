"use client";

import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <div>
      <a href={href} className={pathname === href ? "text-accent font-bold" : "text-black font-medium hover:text-accent transition-all"}>
        {children}
      </a>
    </div>
  );
};

export default Navlink;