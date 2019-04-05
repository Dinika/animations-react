import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
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
        <Transition
          in={!this.state.isModalClosed}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {state => (
            <Modal closed={state} closeModal={this.closeModal.bind(this)} />
          )}
        </Transition>

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
