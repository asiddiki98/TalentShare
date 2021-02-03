import React from 'react'


class PostIndex extends React.Component{
    render(){
        let display;
        if (this.props.posts){
            display = this.props.posts.map((post,idx) => {
                return (
                  <video key={`post-${idx}`} src={`/content/video/${post.filename}`} controls ></video>
             
                )
            })    
        } else {
            display = <p>testing</p>
        }
       return (
        
           <ul>
               {display}
           </ul>
       ) 
    }

}

export default PostIndex 