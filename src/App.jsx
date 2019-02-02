import React, { Component } from "react";
import FullNote from "./FullNote";
import "./App.css";
import Dragula from "../node_modules/dragula";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      id: 0
    };
    this.dragRef = React.createRef();
  }

  createNote = () => {
    let newNotes = [...this.state.notes];
    const id = this.state.id;
    newNotes.push({
      component: <FullNote deleteNote={() => this.deleteNote(id)} key={id} />,
      id: id
    });

    this.setState(
      prevState => {
        return {
          notes: newNotes,
          id: prevState.id + 1
        };
      },
      () => {
        console.log(this.state.id);
      }
    );
  };

  deleteNote = id => {
    let newNotes = [...this.state.notes];
    console.log(id);

    newNotes = newNotes.filter(note => note.id !== id);

    this.setState({
      notes: newNotes
    });
  };

  render() {
    return (
      <div className="App-body" ref={this.dragRef}>
        <div className="header">
          <button onClick={this.createNote} className="btn btn-warning btn-sm">
            New Note
          </button>
          <hr className="header-bottom-line" />
        </div>
        <ul className="saved-notes">
          {this.state.notes.map(note => note.component)}
        </ul>
      </div>
    );
  }
  dragRef = () => {
    let options = {};
    Dragula([document.querySelector(".saved-notes")], options);
  };
}

export default App;
