import {Component,createContext} from 'react'


export const CardsContext=createContext()


class CardProvider extends Component{
    state={
        posts:[
            {
                postImage:['/images/climate_change_header.png','/images/climate_change_2.jpg','/images/climate_change_3.jpg'],
                postType:'imagePost',

                postTitle:'Climate Around My Home',
                postContent:`
                <span style="color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; letter-spacing: -0.04448px;">Adds an HTML block-level element around the line containing the current selection<b>, replacing the block e</b>lement containing the line if one exists (in Firefox,&nbsp;</span><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" title="The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element." style="margin: 0px; padding: 0px; border: 0px; color: rgb(61, 126, 154); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; letter-spacing: -0.04448px;"><code style="margin: 0px; padding: 0px 2px; border: 0px; font-style: inherit; font-weight: inherit; background-color: rgba(220, 220, 220, 0.5); border-radius: 2px; font-family: consolas, &quot;Liberation Mono&quot;, courier, monospace; overflow-wrap: break-word;">&lt;blockquote&gt;</code></a><span style="color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; letter-spacing: -0.04448px;">&nbsp;is the exception — it will wrap any containing block element). Requires a tag-name string as a value <i>argument. Virtually all block-level elements ca</i>n be used. (</span><div><span style="color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; letter-spacing: -0.04448px;"><br></span></div><div><ol><li><span style="color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; letter-spacing: -0.04448px;">Internet Explorer and Edge support only heading tags</span></li><li><span style="color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; letter-spacing: -0.04448px;">&nbsp;</span><code style="margin: 0px; padding: 0px 2px; border: 0px; background-color: rgba(220, 220, 220, 0.5); border-radius: 2px; font-family: consolas, &quot;Liberation Mono&quot;, courier, monospace; overflow-wrap: break-word; color: rgb(51, 51, 51); font-size: 16px; letter-spacing: -0.04448px;">H1</code><span style="color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; letter-spacing: -0.04448px;">–</span><code style="margin: 0px; padding: 0px 2px; border: 0px; background-color: rgba(220, 220, 220, 0.5); border-radius: 2px; font-family: consolas, &quot;Liberation Mono&quot;, courier, monospace; overflow-wrap: break-word; color: rgb(51, 51, 51); font-size: 16px; letter-spacing: -0.04448px;">H6</code><span style="color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; letter-spacing: -0.04448px;">,&nbsp;</span><code style="margin: 0px; padding: 0px 2px; border: 0px; background-color: rgba(220, 220, 220, 0.5); border-radius: 2px; font-family: consolas, &quot;Liberation Mono&quot;, courier, monospace; overflow-wrap: break-word; color: rgb(51, 51, 51); font-size: 16px; letter-spacing: -0.04448px;">ADDRESS</code><span style="color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; letter-spacing: -0.04448px;">, and&nbsp;</span><code style="margin: 0px; padding: 0px 2px; border: 0px; background-color: rgba(220, 220, 220, 0.5); border-radius: 2px; font-family: consolas, &quot;Liberation Mono&quot;, courier, monospace; overflow-wrap: break-word; color: rgb(51, 51, 51); font-size: 16px; letter-spacing: -0.04448px;">PRE</code><span style="color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; letter-spacing: -0.04448px;">, which must be wrapped in angle&nbsp;</span></li><li><span style="color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; letter-spacing: -0.04448px;">brackets, such as&nbsp;</span><code style="margin: 0px; padding: 0px 2px; border: 0px; background-color: rgba(220, 220, 220, 0.5); border-radius: 2px; font-family: consolas, &quot;Liberation Mono&quot;, courier, monospace; overflow-wrap: break-word; color: rgb(51, 51, 51); font-size: 16px; letter-spacing: -0.04448px;">"&lt;H1&gt;"</code><span style="color: rgb(51, 51, 51); font-family: Arial, x-locale-body, sans-serif; font-size: 16px; letter-spacing: -0.04448px;">.)</span></li></ol></div>
                `,
                postedOn:"2020/8/15",
                postAuthor:'Vishesh',
                postTags:['climateChange','xr']
            },
            {
                postType:'textPost',
                postTitle:'Climate Around My Home',
                postContent:"Some something",
                postedOn:"2020/8/15",
                postAuthor:'Vishesh',
                postTags:['climateChange','xr']
            },
            {
                postImage:['/images/climate_change_header.png'],
                postType:'imagePost',
                postTitle:'Climate Around My Home',
                postContent:"Some something",
                postedOn:"2020/8/15",
                postAuthor:'Vishesh',
                postTags:['climateChange','xr']
            },
            {
                postImage:['/images/climate_change_header.png'],
                postType:'imagePost',
                postTitle:'Climate Around My Home',
                postContent:"Some something",
                postedOn:"2020/8/15",
                postAuthor:'Vishesh',
                postTags:['climateChange','xr','climateChange','xr','climateChange','xr']
            },
            {
                postType:'textPost',
                postTitle:'Climate Around My Home',
                postContent:"Some something",
                postedOn:"2020/8/15",
                postAuthor:'Vishesh',
                postTags:['climateChange','xr']
            },
            
            {
                postType:'textPost',
                postTitle:'Climate Around My Home',
                postContent:"Some something",
                postedOn:"2020/8/15",
                postAuthor:'Vishesh',
                postTags:['climateChange','xr']
            },
            {
                postImage:['/images/climate_change_header.png'],
                postType:'imagePost',

                postTitle:'Climate Around My Home',
                postContent:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
                postedOn:"2020/8/15",
                postAuthor:'Vishesh',
                postTags:['climateChange','xr']
            },
            {
                postType:'textPost',
                postTitle:'Climate Around My Home',
                postContent:"Some something",
                postedOn:"2020/8/15",
                postAuthor:'Vishesh',
                postTags:['climateChange','xr']
            },
            {
                postImage:['/images/climate_change_header.png','/images/climate_change_2.jpg'],
                postType:'imagePost',
                postTitle:'Climate Around My Home',
                postContent:"Some something",
                postedOn:"2020/8/15",
                postAuthor:'Vishesh',
                postTags:['climateChange','xr']
            },
            {
                postImage:['/images/climate_change_header.png'],
                postType:'imagePost',
                postTitle:'Climate Around My Home',
                postContent:"Some something",
                postedOn:"2020/8/15",
                postAuthor:'Vishesh',
                postTags:['climateChange','xr','climateChange','xr','climateChange','xr']
            },
            {
                postType:'textPost',
                postTitle:'Climate Around My Home',
                postContent:"Some something",
                postedOn:"2020/8/15",
                postAuthor:'Vishesh',
                postTags:['climateChange','xr']
            },
            
            {
                postType:'textPost',
                postTitle:'Climate Around My Home',
                postContent:"Some something",
                postedOn:"2020/8/15",
                postAuthor:'Vishesh',
                postTags:['climateChange','xr']
            }
            ]
    }

    myLogAction=()=>{
        console.log('This is Similar to redux action')
    }

    render(){
        return(
            <CardsContext.Provider value={{
                posts:this.state.posts
                }}>
                {this.props.children}
            </CardsContext.Provider>
        )
    }
}
export default CardProvider