import React from "react";
import "./Result.css";
import NameCard from "./../NameCard/NameCard";

const Result = ({generatedNames}) => {
  const generatedNameTags = generatedNames.map(generatedName => {
    return <NameCard key={generatedName} generatedName={generatedName} />;
  });

  return <div className="result-container">{generatedNameTags}</div>;
};

export default Result;
