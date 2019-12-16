import React, {Fragment}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom'
import Home from "./Home"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

//rgba(0,0,0,.54)

export default function Nav(props) {
    const {setValue, value} = props;
    const classes = useStyles();

     const handleChange = (event, newValue) => {
        setValue(newValue);
        
    };
    return (
        <Paper className={classes.root}>
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="Home" component={Link} to='/' style={{textDecoration: "none", color: "rgba(0,0,0,.54)"}}/>
            <Tab label="Skills" component={Link} to='/skills' style={{textDecoration: "none", color: "rgba(0,0,0,.54)"}}/>
            <Tab label="Projects" component={Link} to='/projects' style={{textDecoration: "none", color: "rgba(0,0,0,.54)"}}/>
            <Tab label="Contact" component={Link} to='/contact' style={{textDecoration: "none", color: "rgba(0,0,0,.54)"}}/>
            
            
            
        </Tabs>
        </Paper>



    );
}