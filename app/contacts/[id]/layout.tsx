import React from "react";

export interface ContactLayoutProps {
  children: React.ReactNode;
}

const ContactLayout = ({ children }: ContactLayoutProps) => {
  return <div>Some Generic contact detail component {children}</div>;
};

export default ContactLayout;
