import Link from "next/link";
import React from "react";
import Flex from "../../components/Flex";
import axios from "axios";
import Image from "next/image";

const asyncGetContacts = async () => {
  try {
    const contacts = await axios.get(
      "https://6359cd1b38725a1746b7ccfa.mockapi.io/api/contacts"
    );
    return contacts.data;
  } catch (error) {}
};

const Contacts = async () => {
  const contacts = await asyncGetContacts();

  return (
    <Flex gap={16}>
      <Flex flexDirection="row">
        {contacts.map((contact: any, idx: number) => (
          <Link key={`${contact.id}-${idx}`} href={`/contacts/${contact.id}`}>
            <Image
              src={contact.avatar}
              alt={contact.name}
              width={100}
              height={100}
            />

            <h6>{contact.name}</h6>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Contacts;
