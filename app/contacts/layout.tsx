import React from "react";

export interface ContactsLayoutProps {
  children: React.ReactNode;
}

const ContactsLayout = ({ children }: ContactsLayoutProps) => {
  return <div>Some Generic contact component {children}</div>;
};

export default ContactsLayout;
