"use client"
import { AppContext } from "@/AppContext";
import Footer from "@/components/Footer";
import DownloadApp from "@/components/homePage/DownloadApp";
import Introduction from "@/components/homePage/Introduction";
import Invoices from "@/components/homePage/Invoices";
import Marketing from "@/components/homePage/Marketing";
import MobileApp from "@/components/homePage/MobileApp";
import Websites from "@/components/homePage/Websites";
import React from "react";

export default function Home() {
  const { content } = React.useContext(AppContext); 
  return (
    <div>
      <Introduction content={content.home.Introduction} BTNS={content.buttons} />
      <Websites content={content.home.Websites} BTNS={content.buttons} />
      <MobileApp content={content.home.MobileApp} BTNS={content.buttons} />
      <Marketing content={content.home.Marketing} BTNS={content.buttons} />
      <Invoices content={content.home.Invoices} BTNS={content.buttons} />
      <DownloadApp content={content.home.DownloadApp} BTNS={content.buttons} />
      <Footer content={content.footer} />
    </div>
  );
}
