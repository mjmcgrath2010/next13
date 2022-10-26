import Link from "next/link";
import React from "react";

export interface ContactsProps {}

const Contacts = () => {
  return (
    <div>
      <Link href="/contacts/create">Create Contact</Link>
      <Link href="/contacts/1">Contact Detail</Link>
    </div>
  );
};

export default Contacts;
