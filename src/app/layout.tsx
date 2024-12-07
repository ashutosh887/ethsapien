import Navbar from "@/components/custom/navbar";
import appConfig from "@/configs/appConfig";
import RainbowProvider from "@/providers/RainbowProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: appConfig.title,
  description: appConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RainbowProvider>
            <Navbar />
            <main>{children}</main>
          </RainbowProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
