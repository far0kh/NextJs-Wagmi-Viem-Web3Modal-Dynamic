import type { Metadata } from "next";
import { RainbowKit } from '@/context/Rainbowkit';

export const metadata: Metadata = {
  title: "RainbowKit",
  description: "RainbowKit Context",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RainbowKit>
      {children}
    </RainbowKit>
  );
}
