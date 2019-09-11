import React from "react";
import moment from "moment";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const NotesList = ({notes}) => {
    return notes.length ? (
        <List>
        {notes.map(note => (
            <ListItem button key={note.id} component={Link} to={`/view/${note.id}`}>
                <ListItemText primary={note.title} secondary={moment(note.id).format("MMM Do YYYY")} />
                <ListItemSecondaryAction>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
    ) : (
        <Typography align="center" variant="h4">
            No notes yet...
        </Typography>
    );
};

export default NotesList;