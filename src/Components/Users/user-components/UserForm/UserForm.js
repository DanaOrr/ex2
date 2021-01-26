import React, { Component } from "react";
import {} from "../../../../Data/data.json";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "", name: "", city: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, inputName) {
    this.setState({ [inputName]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props)
    const { date, name, city } = this.state;
    this.props.onAddUser({ date, name, city });
    this.setState({ name: "", city: "", date: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label >
          <input
            type="text"
            value={this.state.date}
            onChange={(e) => this.handleChange(e, "date")}
          />
          <br />
        </label>
        <label >
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.handleChange(e, "name")}
          />
          <br />
        </label>
        <label >
          <input
            type="text"
            value={this.state.city}
            onChange={(e) => this.handleChange(e, "city")}
          />
          <br />
        </label>
        <button className="save" type="submit"> {this.props.button} </button>
      </form>
    );
  }
}

export default UserForm;
