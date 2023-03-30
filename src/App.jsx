import React from "react";
import {
  Hero,
  Sales,
  FlexContent,
  Story,
  Footer,
  Navbar,
  Cart,
} from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endPoint={popularsales} ifExists />
        <FlexContent endPoint={highlight} ifExists />
        <Sales endPoint={toprateslaes} />
        <FlexContent endPoint={sneaker} />
        <Story story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
