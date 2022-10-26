import React, { Component } from 'react';
import PropTypes from 'prop-types';

import generators from '../lib/generators';

export default class AddTask extends Component {
  constructor() {
    super();

    this.initialState = {
      id: 0,
      title: '',
      hasFinished: false,
    };

    this.state = this.initialState;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const { randomId } = generators;
    this.setState({
      id: randomId(9999999999),
      title: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onCreate } = this.props;
    const { id, title } = this.state;
    if (id > 0 && title !== '') {
      onCreate(this.state);
      this.setState(this.initialState);
    }
  }

  render() {
    const { title } = this.state;
    return (
      // onChange={(event) => console.log(event.target.value)}
      // onchange = mudanças
      // event = evento
      // target.value = valor pretendido
      // pegar os valores inseridos no input todas as vezes que houver mudanças.
      <form onSubmit={this.handleSubmit}>
        {/* <form onSubmit={(event) => this.handleSubmit(event)}> */}
        {/* <input type="text" value={title} onChange={(event) => this.handleInput(event)} /> */}
        <input type="text" value={title} onChange={this.handleInput} />
        <button type="submit">Adicionar tarefa</button>
      </form>
    );
  }
}

AddTask.propTypes = {
  onCreate: PropTypes.func,
}.isrequired;
