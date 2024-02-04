import React, { ReactNode } from "react";
import Head from "next/head";

const CustomHead = ({ children }: { children: ReactNode }) => {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  );
};

export default CustomHead;
