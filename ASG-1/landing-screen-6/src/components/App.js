import React from "react";
import Header from "./Header";
import Product from "./Product";
import Startestimonial from "./Startestimonial";
import SampleText from "./SampleText";
// import SiteCarousel from "./SiteCarousel";
import Features from "./Features";
import Checklist from "./Checklist";
import TargetCard from "./TargetCard";

function App() {
  return (
    <div className="site-wrapper overflow-hidden">
      <Header />
      <Product />
      <Startestimonial />
      <SampleText
        htag="Chapters we’ve covered"
        ptag="Create custom landing pages with Omega that converts more visitors than
        any website."
      />
      {/* <SiteCarousel /> */}
      <Features />
      <SampleText
        htag="Things you’ll learn"
        ptag="Create custom landing pages with Omega that converts more visitors than any website."
      />
      <Checklist />
      <TargetCard />
    </div>
  );
}

export default App;
