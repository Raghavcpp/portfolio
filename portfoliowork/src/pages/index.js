// src/pages/index.js
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raghav Verma | Portfolio</title>
      </Head>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
