import React, { useState } from "react";

const PanelSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="ps-panel__wrapper">
      <div className="ps-panel__header">
        <form className="ps-form--search-mobile" action="/" method="get">
          <div className="form-group--nest">
            <input
              className="form-control"
              type="text"
              placeholder="Search something..."
              value={searchQuery}
              onChange={handleChange}
            />
            <button type="submit">
              <i className="icon-magnifier"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="navigation__content"></div>
    </div>
  );
};

export default PanelSearch;
