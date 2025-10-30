"use client"
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/Header/Header";
import Topbar from "./components/Header/Topbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Pagebar from "./components/Pagebar/Pagebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeProvider>
            <Topbar/>
            <Header />
            <Pagebar/>
            {children}
            <ScrollToTop/>
            <Footer/>
            </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
