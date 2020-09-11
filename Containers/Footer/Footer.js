import React,{Component} from 'react'
import Fab from '@material-ui/core/Fab'
import {Add} from '@material-ui/icons'

class Footer extends Component{
    render(){
        return(
            <div>
            <Fab color="primary" aria-label="add">
                <Add />
            </Fab>
            </div>
        )
    }
}

export default Footer