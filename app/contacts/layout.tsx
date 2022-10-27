import React from "react";

export interface ContactsLayoutProps {
  children: React.ReactNode;
}

const ContactsLayout = ({ children }: ContactsLayoutProps) => {
  return <div>Some Generic contacts home component {children}</div>;
};

export default ContactsLayout;
