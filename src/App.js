import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    isModalClosed: true
  };

  closeModal() {
    this.setState({ isModalClosed: true });
  }

  openModal() {
    this.setState({ isModalClosed: false });
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal
          closed={this.state.isModalClosed}
          closeModal={this.closeModal.bind(this)}
        />
        <Backdrop closed={this.state.isModalClosed} />
        <button className="Button" onClick={this.openModal.bind(this)}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
