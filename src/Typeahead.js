import React from "react";
import data from "./data";
import CountryList from "./CountryList";
class Typeahead extends React.Component {
  state = {
    query: "",
    value: ""
  };
  onChange = e => {
    this.setState({ query: e.target.value.toLowerCase() });
  };
  selectedValue = e => {
    this.setState({
      value: e.target.textContent
    });
  };
  render() {
    const {
      state: { query, value },
      onChange,
      selectedValue
    } = this;
    const list = data.filter(country =>
      country.name.toLowerCase().includes(query)
    );

    return (
      <div className="dropdown">
        <input
          value={value}
          placeholder="select country"
          className="input"
          onChange={onChange}
        />
        <CountryList list={list} selectedValue={selectedValue} />
      </div>
    );
  }
}
export default Typeahead;
