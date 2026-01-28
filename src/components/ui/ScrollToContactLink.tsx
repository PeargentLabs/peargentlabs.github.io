"use client";

import React, { ReactNode } from "react";

interface ScrollToContactLinkProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const ScrollToContactLink = ({
    children,
    className,
    onClick,
}: ScrollToContactLinkProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
        if (onClick) onClick();
    };

    return (
        <a href="#contact" onClick={handleClick} className={className}>
            {children}
        </a>
    );
};
