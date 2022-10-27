import React from "react";

export interface ContactLayoutProps {
  children: React.ReactNode;
}

const ContactLayout = ({ children }: ContactLayoutProps) => {
  return (
    <div>
      <h3>Contact:</h3> {children}
    </div>
  );
};

export default ContactLayout;
