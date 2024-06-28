import React from "react";
import { Header, Footer } from "@components/common";
import Hero from "./Hero";
import Catalog from "./Catalog";

function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <Catalog />
      <Footer />
    </>
  );
}

export default Landing;
