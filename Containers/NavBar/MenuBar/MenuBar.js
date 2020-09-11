import React,{Component} from 'react'
import {SwipeableDrawer,List,ListItem,ListItemText,ListItemIcon,IconButton,Divider} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import classes from './MenuBar.module.css'


class MenuBar extends Component{
    render(){
        return(
            <SwipeableDrawer
            anchor='left'
            open={this.props.open}
            onOpen={()=>this.props.controlSideBar(true)}
            onClose={()=>this.props.controlSideBar(false)}
            >
            <div className={classes.menuBar}>
            <div className={classes.drawerHeader}>
            <IconButton onClick={()=>this.props.controlSideBar(false)}>
            <ChevronLeftIcon /> 
            </IconButton>
            
            </div>
            <Divider/>
            <div >
                <List>
                    <ListItem button>
                        <ListItemText primary='help'/>

                    </ListItem>
                </List>
            </div>
            </div>
            </SwipeableDrawer>
        )
    }



}

export default MenuBar