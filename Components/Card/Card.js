import styles from './Card.module.css' 
import ImageFrame from './ImageFrame/ImageFrame'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'; 
import Fab from '@material-ui/core/Fab';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
const Card=(props)=>{
let postContent=null
// if( props.post.postContent.length>300){
//     postContent=<React.Fragment>
//         <p>
//             {props.post.postContent.slice(0,300)}
//         </p>
//         <button>
//             Read More
//         </button>
//     </React.Fragment>
// }else{
//     postContent=<React.Fragment>
//     <p>
//         {props.post.postContent.slice(0,50)}
//     </p>
//     </React.Fragment>
// }

    return (
 <div className={styles.card}>
        <div className={styles.cardAuthor}>
            <p>{props.post.postAuthor}</p>
        </div>
        <div className={styles.imageFrame}>
        {/* {
            props.post.postType==='imagePost'&&props.post.postImage.length>1?
                <div className={styles.arrow} style={{left:'-27px'}}>
                    <Fab style={{textAlign:'center',backgroundColor:'#ffffff'}}>
                     <ArrowBackIosIcon/>
                     </Fab>
                    </div>
                     :null   
        } */}
        {
            props.post.postType==='imagePost'?
            <ImageFrame uniqueid={props.uniqueid} src={props.post.postImage}/>
            :null
        }
        {/* {
            props.post.postType==='imagePost'&&props.post.postImage.length>1?
        <div className={styles.arrow} style={{right:'-27px'}}>
            <Fab style={{textAlign:'center',backgroundColor:'#ffffff'}}>
            <ArrowForwardIosIcon/>
            </Fab>
        </div>
        :null   
        }  */}
        </div>
        <div className={styles.cardTitle}>
            <h3>{props.post.postTitle}</h3>
        </div>
        <div className={styles.cardContent}>
        <div>
            {ReactHtmlParser(props.post.postContent)}
        </div>
        </div>
        <div className={styles.cardTags +' '+ styles.footer}>
            {props.post.postTags.map((tag,i)=>(
                <span key={i}><i>#</i>{tag}</span>
            ))}
        </div>
       
    </div>
 )
}
export default Card