import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: {
    default: "The blog - Joao's Blog",
    template: "%s - Joao's Blog",
  },
  description: "Blog mais famoso de fsa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
