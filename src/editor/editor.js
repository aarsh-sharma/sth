import React, { Component } from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: "",
    };
  }

  componenetDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selecetedNote.title,
      id: this.props.selectedNote.id,
    });
  };

  componenetDidUpdate = () => {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selecetedNote.title,
        id: this.props.selectedNote.id,
      });
    }
  };

  updateBody = async (val) => {
    await this.setState({ text: val });
    this.update();
  };

  updateTitle = async (txt) => {
    await this.setState({ title: txt });
    this.update();
  };

  update = debounce(() => {
    console.log("updating database");
  }, 1500);

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.editorContainer}>
        <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
        <input
          className={classes.titleInput}
          placeholder="Note title..."
          value={this.state.title ? this.state.title : ""}
          onChange={(e) => this.updateTitle(e.target.value)}
        ></input>
        <ReactQuill
          value={this.state.text}
          onChange={this.updateBody}
        ></ReactQuill>
      </div>
    );
  }
}

export default withStyles(styles)(Editor);
