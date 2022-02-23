import React from "react";

interface LinkProps {
  children: React.ReactNode;
  url: string;
  target?: string;
}

const Link = ({ url, target, children }: LinkProps) => (
  <a href={url} target={target}>
    {children}
  </a>
);

export default Link;
