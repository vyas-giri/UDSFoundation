import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/hooks/useAuth";
import { Providers } from "@/util/Provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "UDS Foundation",
  description: "Education for everyone!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        <AuthProvider>
          {children}
        </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
