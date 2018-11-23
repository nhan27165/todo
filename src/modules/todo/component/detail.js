import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props)

    this.state = { title: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    const { onSubmit, todo } = this.props;
    const { title } = this.state;

    return (
      <div>
        <h2>{todo.title}</h2>
        <form onSubmit={(e) => {
          onSubmit({...todo, title});
          e.preventDefault();
        }}>
          <label>
            Task:
            <input type='text'
                   placeholder='To do task'
                   value={title}
                   onChange={this.handleInputChange}/>
          </label>
          <input type='submit' value='Update title' />
        </form>
        <br/>
      </div>
    );
  }
}

export default Detail;
