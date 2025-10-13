import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./(home)/Header";
import Footer from "./(home)/Footer";

export const metadata = {
  title: "Value Hunter - Best Deals & Shopping",
  description: "Find the best deals and save money on your favorite products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
     <head />
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
