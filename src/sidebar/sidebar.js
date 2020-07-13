import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItem from "../sidebarItem/sidebarItem";

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      addingNote: false,
      title: null,
    };
  }

  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };

  updateTitle = (newTitle) => {
    this.setState({ title: newTitle });
  }

  newNote = () => {
    console.log(this.state);
  }

  selectNote = () => console.log('select Note')

  deleteNote = () => console.log('delete Note')


  render() {
    const { notes, classes, selectedNoteIndex } = this.props;

    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
            {this.state.addingNote ? "Cancel" : "New Note"}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                type="text"
                className={classes.newNoteInput}
                placeholder="Enter note title"
                onKeyUp={(e) => this.updateTitle(e.target.value)}
              />
              <Button
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Submit Note
              </Button>
            </div>
          ) : null}

          <List>
            {notes.map((_note, _index) => {
              return (
                <div key={_index}>
                  <SidebarItem
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  ></SidebarItem>
                  <Divider></Divider>
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default withStyles(styles)(Sidebar);
