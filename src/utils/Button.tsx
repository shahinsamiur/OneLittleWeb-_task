import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  onClick,
  href = "#" as string,
  ...props
}: ButtonProps & { href: string }) {
  return (
    <a href={href}>
      <button
        {...props}
        onClick={onClick}
        className={`${className} bg-foreground text-white px-4 py-2 rounded hover:bg-opacity-90 transition cursor-pointer text-base`}
      >
        {children}
      </button>
    </a>
  );
}
