import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';

import {gravatarPath} from '../gravatar';
import MessageField from './MessageField';

const useStyles = makeStyles({
    root:{
        gridRow: 2,
        margin: '26px',
    },
});

const MessageInputField = ({name}) => {
    const [text, setText] = useState('');
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    return (
        <div className={classes.root}>
        <Grid container>
        <Grid  item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid  item xs={10}>
            <MessageField name={name} setText={setText} text={text} />
        </Grid>
        <Grid  item xs={1}>ボタン</Grid>
        </Grid>
        </div>
        );
    };

export default MessageInputField;
