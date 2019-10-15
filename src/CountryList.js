import React from "react";
function CountryList(props) {
  return (
    <div className="list">
      {props.list.slice(0, 20).map(country => {
        return (
          <div
            className="country-name"
            key={country.id}
            onClick={props.selectedValue}
          >
            {country.name}
          </div>
        );
      })}
    </div>
  );
}
export default CountryList;
