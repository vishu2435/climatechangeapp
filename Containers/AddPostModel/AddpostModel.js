import {Component} from 'react'
import styles from './AddModel.module.css'
import BackDrop from '../../Components/BackDrop/Backdrop'
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';
import CustomButton from '../../Components/CustomButton/CustomButton'
import AddModelImage from '../../Components/AddModalImage/AddModalImage'
import TagsContainer from '../TagsContainer/TagsContainer'

class AddpostModel extends Component{
    constructor(props){
        super(props)
        
        this.imageCounter=0
        this.postingDisabled=true


    }
    state={
        placeHolder:'Add Heading',
        postingDisabled:true,
        images:[],
        tagsArray:[]
    }

    chooseImageFile=()=>{
        document.getElementById('fieldPhoto').click()
        
    }
    sendImageFile=(event)=>{
        var file=event.currentTarget.files[0]
        var fileReader=new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload=()=>{
            let images=this.state.images
            images.push({
                id:this.imageCounter++,
                src:fileReader.result
            })
            this.setState({
                images:images
            })

        }
        
        
    
    }
    onEnterText(value){
        let el=document.querySelector("#heading")
    
       if(el.innerHTML!==''){
           document.querySelector('#placeholder').innerHTML=''
       }else if(el.innerHTML===''){
        
        document.querySelector('#placeholder').innerHTML='Add Heading'
       }
    }
    onEnterTextParagraph=(value)=>{
        let el=document.querySelector("#paragraph")

       if(el.innerHTML!==''){
           document.querySelector('#placeholderParagraph').innerHTML=''
           this.setState({
                    postingDisabled:false
                })
        }else if(el.innerHTML===''){
        document.querySelector('#placeholderParagraph').innerHTML='Your Text'
        this.setState({
                    postingDisabled:true
                })
    }
  
    }
    deleteImage=(id)=>{
        let images=this.state.images
        // let index=images.findIndex(()=>())
    }
    formatText(event){
        let command=event.currentTarget.getAttribute('data_command')
        console.log()
        document.execCommand(command,false,null)
    }
    formatTextWithArgs(event){
        let command=event.currentTarget.getAttribute('data_command')
        console.log()
        document.execCommand(command,false,"<blockquote>")
    }
    changeTagsArray=(array)=>{
        this.setState({
            tagsArray:array
        },()=>{
            console.log("Tags array ",this.state.tagsArray)
        })
    }
    render(){
        return(
            <React.Fragment>
            <BackDrop/>
            <div >
            <div className={styles.addModel}>
           
            <div className={styles.editor_holder}>
                <div id="heading"  onInput={this.onEnterText} className={styles.heading} contentEditable >
              
                </div>
                <div id="placeholder" onClick={()=>{document.getElementById("heading").focus()}} className={styles.placeHolder} style={{top:"0px"}}>Add Heading</div>
            </div>
            <div style={{maxHeight:"200px",position:"relative",width:"100%"}}>
            {
                this.state.images.length>0?
                <AddModelImage deleteImage={this.deleteImage} uniqueid={"addModelImages1234"} src={this.state.images} maxHeight="200px"/>:
                null
            }
            </div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:'center'}}>
            <div id="icons"  className={styles.icons} >
                           
                    <div  onClick={this.formatText} data_command="bold" className={styles.icon}>
                        <FormatBoldIcon   style={{color:'white'}}/>
                    </div>
                    <div  onClick={this.formatText} data_command="italic" className={styles.icon}>
                        <FormatItalicIcon style={{color:'white'}}/>
                    </div>
                    <div  onClick={this.formatText} data_command="strikeThrough" className={styles.icon}>
                        <StrikethroughSIcon style={{color:'white'}}/>
                    </div>
                    <div  onClick={this.formatText} data_command="insertUnorderedList" className={styles.icon}>
                        <FormatListBulletedIcon style={{color:'white'}}/>
                    </div>
                    <div  onClick={this.formatText} data_command="insertOrderedList" className={styles.icon}>
                        <FormatListNumberedIcon style={{color:'white'}}/>
                    </div>
                   
                
                </div>
            <div className={styles.addImage}>
                    <CustomButton onClick={this.chooseImageFile}>Add Image</CustomButton>
                    <input type="file" onChange={this.sendImageFile} accept="image/*" id="fieldPhoto" style={{display:"none"}}/>        
            </div>
            </div>
            <div onMouseUp={this.getSelectedText} onClick={()=>document.getElementById("paragraph").focus()}  className={styles.editor_holder+' '+styles.editor_holder_p} >
                
            
                
                
                <p  id="paragraph" onInput={this.onEnterTextParagraph} className={styles.paragraph} contentEditable ></p>
                <div id="placeholderParagraph" onClick={()=>document.getElementById("paragraph").click()} className={styles.placeHolder} style={{top:"10px"}}>Your Text</div>
                
                
            
            </div>
            <TagsContainer tagsArray={this.state.tagsArray} changeTagsArray={this.changeTagsArray}/>
            <div className={styles.footer}>
                <CustomButton onClick={this.props.closeModel}>
                    Cancel                    
                </CustomButton>
                <CustomButton disabled={this.state.postingDisabled}>
                    Post                    
                </CustomButton>
            </div>
            </div>
            </div>
        </React.Fragment>
        )
        
    }
}

export default AddpostModel