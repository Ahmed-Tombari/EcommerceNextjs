import { Montserrat } from 'next/font/google';
import "./globals.css";
import Head from "next/head";
import ClientWrapper from "./ClientWrapper";

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <meta name="robots" content="index, follow" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://RentalCars.com/ " />

        {/* Open Graph / Facebook Meta */}
        <meta property="og:title" content="Accueil | Rental Cars" />
        <meta
          property="og:description"
          content="Découvrez nos services de qualité."
        />
        <meta
          property="og:image"
          content="https://RentalCars.com/images/og-image.jpg "
        />
        <meta property="og:url" content="https://RentalCars.com/ " />
        <meta property="og:type" content="website" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org ",
              "@type": "WebSite",
              name: "Rental Cars",
              url: "https://RentalCars.com ",
              description: "Découvrez nos services de qualité.",
            }),
          }}
        />
      </Head>
      <body
        className={`${montserrat.variable} antialiased`}
        data-theme="dark"
      >
        <div className="bg-white text-black dark:bg-black dark:text-white">
           <ClientWrapper>{children}</ClientWrapper>
        </div>
      </body>
    </html>
  );
}