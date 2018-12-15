import React, { Component } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { setResults } from "../actions/results";
import { setIsLoading } from "../actions/isLoading";
import { addQuery } from "../actions/queries";
import Select from "react-select";
import getQueriesForSelect from "../utils/getQueriesForSelect";
class Search extends Component {
  state = { text: "" };
  onSubmitRequest = async event => {
    event.preventDefault();
    this.props.dispatch(setIsLoading(true));
    this.props.dispatch(addQuery(this.state.text));
    try {
      const response = await axios.get(
        `https://itunes.apple.com/search?term=${this.state.text}&&limit=25`
      );
      console.log(response.data.results);
      this.setState(() => ({ text: "" }));
      this.props.dispatch(setResults(response.data.results));
      this.props.dispatch(setIsLoading(false));
    } catch (err) {
      console.log(err);
    }
  };

  onSetInput = e => {
    const text = e.target.value;
    this.setState(() => ({ text }));
  };
  onSetSelect = option => {
    const text = option.value;
    this.setState(() => ({ text }));
  };
  render() {
    return (
      <form className="Search" onSubmit={this.onSubmitRequest}>
        <input
          className="Search-input"
          placeholder="Search apple.com"
          onChange={this.onSetInput}
          value={this.state.text}
        />
        <Select
          value={{ value: this.state.text, label: "TOP 10 SEARCHING" }}
          onChange={this.onSetSelect}
          options={getQueriesForSelect(this.props.queries)}
          className="Search-select"
          placeholder="TOP 10 SEARCHING"
        />
        <button className="Search-button">
          <FaSearch className="Search-icon" />
        </button>
      </form>
    );
  }
}
const mapStateToProps = ({ queries }) => ({ queries });
export default connect(mapStateToProps)(Search);
