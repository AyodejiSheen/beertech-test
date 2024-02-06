import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GlobalProvider } from "@/redux/provider";


const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })


export const metadata: Metadata = {
  title: "Shop.com",
  description: "Luxury Online Shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <GlobalProvider>
          <main className="space-y-3">
            <Navbar />
            <div className="h-20" />
            <main className="">
              <div className="px-2 md:px-4">
                {children}
              </div>
            </main>
            <Footer />
          </main>
        </GlobalProvider>
      </body>
    </html>
  );
}
