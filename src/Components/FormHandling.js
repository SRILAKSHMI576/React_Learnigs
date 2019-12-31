import React from "react";

class FormHandling extends React.Component {
  state = {
    name: "",
    comments: "",
    topic: "react"
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleCommentChange = event => {
    this.setState({
      comments: event.target.value
    });
  };

  handleTopicChange = event => {
    this.setState({
      topic: event.target.value
    });
  };

  handleSubmit = event => {
    alert(`${this.state.name} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            onChange={this.handleNameChange}
            type="text"
            value={this.state.name}
          />
        </div>
        <div>
          <label>Comments:</label>
          <textarea
            onChange={this.handleCommentChange}
            value={this.state.comments}
          ></textarea>
        </div>
        <div>
          <label>Topic:</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="javascript">Java Script</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default FormHandling;
