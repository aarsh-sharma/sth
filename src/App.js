import React, { Component } from "react";
import "./App.css";
import Editor from "./editor/editor";
import Sidebar from "./sidebar/sidebar";
import firebase from "firebase/app";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
    };
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((_doc) => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes });
      });
  };

  selectNote = (note, index) => {
    this.setState({ selectedNoteIndex: index, selectedNote: note });
  };

  render() {
    return (
      <div>
        <Sidebar
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deletNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
        ></Sidebar>
        {this.state.selectedNote ? (
          <Editor
            selectedNote={this.state.selectedNote}
            selectedNoteIndex={this.state.selectedNoteIndex}
            notes={this.state.notes}
          ></Editor>
        ) : null}
      </div>
    );
  }
}

export default App;
