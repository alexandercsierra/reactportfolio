import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faHtml5, faCss3Alt, faJs, faReact, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import {faCube} from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

 
library.add(faHtml5, faCss3Alt, faJs, faCube, faReact)

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "20%",
    ['@media (max-width:650px)']: { // eslint-disable-line no-useless-computed-key
        marginTop: "80%"
      }
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
                label="Copyright 2019 Alexander Sierra" />
            {/* <Tab 
                style={{color: "white"}}
                label="Skills" />
            <Tab 
                style={{color: "white"}}
                label="Projects" />
            <Tab 
                style={{color: "white"}}
                label="Contact" /> */}
        </Tabs>
        </Paper>
    );
}