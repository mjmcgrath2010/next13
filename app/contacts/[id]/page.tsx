import axios from "axios";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

import Flex from "../../../components/Flex";
import Image from "next/image";

export interface ContactDetailProps {}

const getContactDetail = async (id: string) => {
  const contact = await axios.get(
    `https://6359cd1b38725a1746b7ccfa.mockapi.io/api/contacts/${id}`
  );

  return contact.data;
};
const ContactDetail = async ({ params: { id } }: any) => {
  const contact = await getContactDetail(id);
  return (
    <Flex>
      <Image src={contact.avatar} alt={contact.name} width={100} height={100} />
      <div>{contact.name}</div>
    </Flex>
  );
};

export default ContactDetail;
