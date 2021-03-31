import React from "react";
import "./NameCard.css";

const domainFinder = "https://domains.google.com/registrar/search?searchTerm=";

const NameCard = ({generatedName}) => {
  return (
    <a
      href={`${domainFinder}${generatedName}`}
      target="_blank"
      rel="noreferrer"
      className="name-card"
    >
      {generatedName}
    </a>
  );
};

export default NameCard;
