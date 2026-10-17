import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import "./globals.css";

/* Headings. Playfair Display ships 400-900, so the display weight is 400
   rather than the 300 the previous serif used. */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

/* Body copy. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  /* TODO: replace with the live domain before launch — canonical URLs and
     social previews are both derived from this. */
  metadataBase: new URL("https://mayareynoldstherapy.com"),
  alternates: { canonical: "/" },
  title: "Anxiety & Trauma Therapy in Santa Monica | Dr. Maya Reynolds",
  description:
    "Licensed clinical psychologist in Santa Monica offering CBT, EMDR and somatic therapy for anxiety, panic, trauma and burnout. In-person & online across CA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
