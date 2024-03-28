import React, { useState, useEffect } from "react";
import Isotope from "isotope-layout";

const FilterStack = () => {
  const [isotope, setIsotope] = useState(null);
  const restBase = "https://veronica-wong.com/portfolio/wp-json/wp/v2/";
  const stackPath = restBase + "stack";

  const [stackData, setStackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterKey, setFilterKey] = useState("*");

  const fetchData = async () => {
    try {
      const stackResponse = await fetch(stackPath);
      if (!stackResponse.ok) {
        throw new Error("Failed to fetch stack data");
      }
      const stackData = await stackResponse.json();
      setStackData(stackData);
      setLoading(false);
      setFilterKey(stackData[0]?.title?.rendered.toLowerCase());
    } catch (error) {
      console.error("Error fetching stack data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isotope && stackData.length) {
      isotope.arrange({ filter: `[data-filter="${filterKey}"]` });
    }
  }, [isotope, stackData, filterKey]);

  useEffect(() => {
    if (!isotope && stackData.length) {
      setIsotope(
        new Isotope(".filter-container", {
          itemSelector: ".filter-item",
          layoutMode: "fitRows",
        })
      );
    }
  }, [isotope, stackData]);

  const handleFilterKeyChange = (key) => {
    setFilterKey(key.toLowerCase());
  };

  return (
    <div className="filter-container">
      <div className="filter-buttons">
        {stackData.map((stack, index) => (
          <button
            key={index}
            onClick={() => handleFilterKeyChange(stack.title.rendered)}
            className={filterKey === stack.title.rendered.toLowerCase() ? "active" : ""}
          >
            {stack.title.rendered}
          </button>
        ))}
      </div>
      <div className="line"></div>
      <ul className="filter-container">
        {stackData.map((stack, index) => (
          <li key={index} className="filter-item" data-filter={stack.title.rendered.toLowerCase()}>
            <div className="filter-content">
              {stack.acf.stack.map((single, skillIndex) => (
                <div key={skillIndex} className="filter-skill">
                  <p>{single}</p>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterStack;
