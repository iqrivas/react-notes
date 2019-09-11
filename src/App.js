import React, { Component, Fragment } from "react";
//Material UI Imports
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
// Notes Component
import NotesForm from  "./NotesForm";
import NotesList from  "./NotesList";
import Note from "./Note";
import Home from "./Home";
//React Router
import { Link, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      notes: []
    };
  }

  //Closure & Currying
updateField = field => e => {
  this.setState({
    [field]: e.target.value
  });
};

saveNote = () => {
  if (this.state.title && this.state.description) {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: Date.now(),
          title: this.state.title,
          description: this.state.description
        }],
      title: "",
      description: ""
    });
    alert("Se ha guardado la nota " + this.state.title + " !!!");
  }
}

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <Typography align="center" variant="h2" gutterBottom>
          My Notes
        </Typography>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={4}>
            <NotesList notes={this.state.notes} />
          </Grid>
          <Grid item xs={8}>
            <Route exact path="/" component={Home} />
            <Route path="/add" render={() => (
              <NotesForm
                title={this.state.title}
                description={this.state.description}
                updateField={this.updateField}
                saveNote={this.saveNote} />
            )} />
            <Route path="/view/:id" render={props => <Note {...props} notes={this.state.notes} />} />
          </Grid>
        </Grid>
        <Fab color="primary" className="addIcon" component={Link} to="/add">
          <AddIcon/>
        </Fab>
      </Fragment>
    )
  }
}

export default App;
