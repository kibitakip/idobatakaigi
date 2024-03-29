import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import MerssageList from "./MessageList";
import MessageInputField from "./MessageInputField";


const useStyles = makeStyles({
    root: {
      display: 'grid',
      height: '100vh',
      gridTemplateRows: '1fr auto',

    },
  });

const Main = ({name}) => {
    const classes = useStyles();
    return <div className= {classes.root}>
        <MerssageList />
        <MessageInputField name={name} />
    </div>
};

export default Main;
