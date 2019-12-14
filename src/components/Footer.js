import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Footer(props) {
    const {setValue, value} = props;
    const classes = useStyles();

     const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
        <Tabs
            style={{padding: "3%", background: "black", color: "white"}}
            // value={value}
            // onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab 
                style={{color: "white"}}
                label="Home" />
            <Tab 
                style={{color: "white"}}
                label="Skills" />
            <Tab 
                style={{color: "white"}}
                label="Projects" />
            <Tab 
                style={{color: "white"}}
                label="Contact" />
        </Tabs>
        </Paper>
    );
}