"use client"
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/Header/Header";
import Topbar from "./components/Header/Topbar";
import Footer from "./components/Footer/Footer";

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
            {children}
            <Footer/>
            </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
