// type rfce and press enter code will autocomplete with the help of es7 editor
import React, { useState } from 'react'
import './Todo.css'
import {Button, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core'
import db from './firebase'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreateIcon from '@material-ui/icons/Create';
import { SettingsInputComponent } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen]=useState(false);
    const [input, setInput]=useState();

    const handleOpen=()=>{
        setOpen(true);
    };

    const updateTodo=()=>{
        //updating the todo with new input
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge:true})
        setOpen(false);
    }

    return (
        <>
        <Modal
            open={open}
            onClose={e=>setOpen(false)}
        >
        <div className={classes.paper, "todo_list", "div-1"}>
            <h2>Edit Your Task!</h2>
            <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>&nbsp;
            <Button onClick={updateTodo} variant="contained" color="primary">Update ToDo</Button>
        </div>    
        </Modal>
        <List className="todo_list">
        <ListItem>
            <ListItemText className="todo_list" primary={props.todo.todo} secondary="Task ToDo"/>
        </ListItem>
        <Button onClick={e => setOpen(true)} variant="contained" color="primary">Edit<CreateIcon/ ></Button>&nbsp;&nbsp; 
        <Button onClick={event =>db.collection('todos').doc(props.todo.id).delete()} variant="contained" color="primary">
        ACCOMPLISHED
        <CheckCircleIcon/ >
        </Button>
        </List>
        </>
    )
}

export default Todo
