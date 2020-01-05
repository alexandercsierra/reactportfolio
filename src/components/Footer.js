import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faHtml5, faCss3Alt, faJs, faReact, faGithubSquare, faBlackTie} from '@fortawesome/free-brands-svg-icons'
import {faCube} from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
import Nav from './Nav'
dom.watch()

 
library.add(faHtml5, faCss3Alt, faJs, faCube, faReact)

const FooterContainer = styled.div`
    margin-top: 20%;
    margin-bottom: 0;
`;

const Copyright = styled.p`
    margin-top: 4%;
    margin-bottom: 0;
    padding-bottom: 4%;
    font-size: .8rem;
`;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "20%",
    position: "relative",
    bottom: 0,
    width: "100%",
    background: "black",
    color: "white"
    // ['@media (max-width:650px)']: { // eslint-disable-line no-useless-computed-key
    //     marginTop: "80%"
    // },
    // ['@media (max-width:450px)']: { // eslint-disable-line no-useless-computed-key
    //     marginTop: "110%"
    // },
    // ['@media (max-width:270px)']: { // eslint-disable-line no-useless-computed-key
    //     marginTop: "200px",
    //     marginBottom: "0"
    // }
  },
});

export default function Footer(props) {
    const {setValue, value} = props;
    const classes = useStyles();

    // const useStyles = makeStyles({
    //     root: {
    //       flexGrow: 1,
    //     },
    //   });

     const handleChange = (event, newValue) => {
        setValue(newValue);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <FooterContainer>
            
            <Paper className={classes.root}>
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="Home" component={Link} to='/' style={{textDecoration: "none", color: "white"}}/>
            <Tab label="Skills" component={Link} to='/skills' style={{textDecoration: "none", color: "white"}}/>
            <Tab label="Projects" component={Link} to='/projects' style={{textDecoration: "none", color: "white"}}/>
            <Tab label="Contact" component={Link} to='/contact' style={{textDecoration: "none", color: "white"}}/>
            
            
            
            
        </Tabs>
        <Copyright>Copyright © 2019 Alexander Sierra</Copyright>
        </Paper>
        
        </FooterContainer>
        
    );
}


