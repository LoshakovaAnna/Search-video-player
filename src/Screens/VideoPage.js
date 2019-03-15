import React, { Component } from 'react';

import { Link }  from 'react-router-dom';

export default class VideoPage extends Component {
  render() {
      console.log(this.props.match.params.id);
      
    return (
        <div>
            <Link to="/"><button>Home</button></Link>
            <div  className="video">
                <iframe  width="560" height="315"     
                    src={"https://www.youtube.com/embed/"+this.props.match.params.id} 
                    frameBorder="0" allow="autoplay; encrypted-media" 
                    allowFullScreen></iframe>
           </div>
        </div>
    )
}}