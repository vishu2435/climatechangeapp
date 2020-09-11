import React,{Component} from 'react'
import {AppBar,Toolbar,Typography,IconButton,Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SideBar from './MenuBar/MenuBar'
import classes from './NavBar.module.css'

class NavBar extends Component{
    state={
        sideBarOpen:false
        }
    controlSideBar=(isOpen)=>{
        this.setState({
            sideBarOpen:isOpen
        })
        console.log("State changed ",this.state)
    }
    render(){
        return(
            <div className={classes.root}>
                <AppBar className={classes.appbar}>
                 <Toolbar>
                 <IconButton edge="start"  onClick={()=>this.controlSideBar(true)} className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon  />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                        Everyday Climate
                </Typography>
                  
                 </Toolbar>   
                </AppBar>
                <SideBar open={this.state.sideBarOpen} controlSideBar={this.controlSideBar}/>
            
            </div>
        )
    }
        
    

}

export default NavBar