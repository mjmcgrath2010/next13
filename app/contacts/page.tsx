import Link from "next/link";
import React from "react";
import Flex from "../../components/Flex";

export interface ContactsProps {}

const Contacts = () => {
  return (
    <Flex gap={16}>
      <Link href="/contacts/create">Create Contact</Link>
      <Link href="/contacts/1">Contact Detail</Link>
    </Flex>
  );
};

export default Contacts;
