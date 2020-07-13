import React, { Component } from "react";
import "./App.css";
import Editor from "./editor/editor";
import Sidebar from "./sidebar/sidebar";
import * as firebase from "firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNode: null,
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

  render() {
    return (
      <div>
        <Sidebar
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
        ></Sidebar>
        <Editor></Editor>
      </div>
    );
  }
}

export default App;
