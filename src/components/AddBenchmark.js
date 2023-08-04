import React from "react";

class AddBenchmark extends React.Component {
  state = {
    name: "",
    version: "",
    scenario: "",
    benchmarklist: ""
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.version === "" || this.state.scenario === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    console.log(this.props)
    this.props.addBenchmarkHandler(this.state);
    this.setState({ name: "", version: "", scenario: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Benchmark</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Benchmark Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Benchmark Version</label>
            <input
              type="text"
              name="version"
              placeholder="Version"
              value={this.state.version}
              onChange={(e) => this.setState({ version: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Benchmark Scenario</label>
            <input
              type="text"
              name="scenario"
              placeholder="Scenario"
              value={this.state.scenario}
              onChange={(e) => this.setState({ scenario: e.target.value })}
            />
          </div>          
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
export default AddBenchmark;