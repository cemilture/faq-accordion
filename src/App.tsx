import "./App.css";
import React from "react";
import FaqAccordion from "./FaqAccordion";
import { faqs } from "./assets/faqs";
import { GiMaterialsScience } from "react-icons/gi";

const App: React.FC = () => {
  return (
    <div className="mx-auto mt-8">
      <div className="flex items-center mb-4 text-4xl font-bold mr-2 justify-center">
        <GiMaterialsScience />
        <h1 className="mx-4">FAQ</h1>
        <GiMaterialsScience />
      </div>

      <FaqAccordion faqs={faqs} />
    </div>
  );
};

export default App;
