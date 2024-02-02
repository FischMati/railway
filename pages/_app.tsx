import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import {NextUIProvider} from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <NextUIProvider>
        <main className="fixed h-[100%] w-[100%] dark text-foreground bg-background">
          <Component {...pageProps} />
        </main>
    </NextUIProvider>
  );
}
