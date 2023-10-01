import Footer from "@/src/components/ui/features/Footer";
import Navbar from "@/src/components/ui/features/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}
