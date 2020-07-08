import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import aux from '../../../hoc/Auxilliary/Auxilliary';

const SideDrawer = (props) => {
    console.log(props.open, '3213131')
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
       attachedClasses = [classes.SideDrawer, classes.Opne]; 
    }
    return (
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    < Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
};

export default SideDrawer;