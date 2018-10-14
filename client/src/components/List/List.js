import React from "react";

export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

/* import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
*/