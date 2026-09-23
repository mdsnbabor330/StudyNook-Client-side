"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children, className = ""  }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        ${isActive
          ? "text-primary font-bold border-b-2 border-primary py-1"
          : "text-foreground/80 font-medium hover:text-primary py-1"
        }
        transition-all
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default Navlink;