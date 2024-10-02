import type { Metadata } from "next";
import { DynamicContext } from '@/context/Dynamic';

export const metadata: Metadata = {
  title: "Dynamic",
  description: "Dynamic Context",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DynamicContext>
      {children}
    </DynamicContext>
  );
}
