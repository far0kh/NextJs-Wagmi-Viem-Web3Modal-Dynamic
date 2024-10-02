import type { Metadata } from "next";
import { Web3Modal } from '@/context/Web3Modal';

export const metadata: Metadata = {
  title: "Web3Modal",
  description: "Web3Modal Context",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Web3Modal>
      {children}
    </Web3Modal>
  );
}
