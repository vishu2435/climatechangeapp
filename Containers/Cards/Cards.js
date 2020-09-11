import styles from './Cards.module.css'
import {Component} from 'react'
import CardProvider,{CardsContext} from '../CardsContext/CardsContext'
import Card from '../../Components/Card/Card'
import AddContent from '../../Components/AddContent/Addcontent'
import AddPostModel from '../AddPostModel/AddpostModel'
class Cards extends Component{
    state={
        displayModal:false
    }
    controlModel=(value)=>{
        this.setState({
            displayModal:value
        })
    }
    render(){
        return(
            <CardProvider>
            
            <div className={styles.cards}>
            <AddContent onClick={()=>this.controlModel(true)}/>
            {
                this.state.displayModal?
                <AddPostModel closeModel={()=>this.controlModel(false)}/>:
                null
            }
            
            <CardsContext.Consumer>
           
                {({posts})=>(
                  
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                     {posts.map((p,i)=>(
                         <Card key={i} post={p} uniqueid={"someuniqueid"+i}/>
                
                        ))}
                    </div>
                
                  
                )}
            </CardsContext.Consumer>
            </div>
            </CardProvider>
        )
    }
    
}

export default Cards
