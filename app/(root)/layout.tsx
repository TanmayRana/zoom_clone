import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "YOOM",
  description: "Video Calling  nextjs app",
  icons: "/icons/logo.svg",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
