import React, {Fragment}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Home from "./Home"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

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
            <Tab label="Home" />
            <Tab label="Skills" />
            <Tab label="Projects" />
            <Tab label="Contact" />
        </Tabs>
        </Paper>
        // <BrowserRouter>
        //     <Paper className={classes.root}>
        //     <Route path="/" render={({ location }) => (
        //         <Fragment>
        //             <Tabs
        //             value={value}
        //             onChange={handleChange}
        //             indicatorColor="primary"
        //             textColor="primary"
        //             centered>
        //                 <Tab label="Home" component={Link} to="/"/>
        //                 <Tab label="Skills" component={Link} to="/skills"/>
        //                 <Tab label="Projects" component={Link} to="/projects"/>
        //                 <Tab label="Contact" component={Link} to="/contact"/>
        //             </Tabs>
        //             <Switch>
        //                 <Route path="/" render={() => Home} />
        //                 <Route path="/skills" render={() => Skills} />
        //                 <Route path="/projects" render={() => Projects} />
        //                 <Route path="/contact" render={() => Contact} />
                        
        //             </Switch>

        //         </Fragment>






        //     )}/>
            
        //     </Paper>
        // </BrowserRouter>



    );
}