import React, { useState } from "react";
import Image from "next/image";
import "./lnb.scss";

interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

interface LnbProps {
  isVisible: boolean;
  theme?: string;
  navItems: NavItem[];
}

export const Lnb: React.FC<LnbProps> = ({
  isVisible = true,
  theme = "",
  navItems,
}) => {

  return (
    <nav className={`global-lnb ${theme} ${isVisible ? '' : 'closed'}`}>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.path}>
              {item.icon && <Image src={item.icon} alt={`${item.label} icon`} />}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
