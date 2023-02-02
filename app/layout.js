// "use client";

import "./globals.css";

import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <main className="h-screen py-10 px-14 max-lg:px-8 bg-cream-white dark:bg-dark-brown font-raleway transition duration-300">
          <Navbar />
          <div className="mt-12"></div>
          {children}
        </main>
      </body>
    </html>
  );
}
