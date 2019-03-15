import React from 'react';
import { Link }  from 'react-router-dom';

export default function SearchResult (props) {
   
        const { resList } = props;
        return (
           <div className="resultScreen">
               {resList.map( (elem, ind) =>
               {
                   console.log(elem.id.videoId); 
                   return ( 
                        <Link key={ind} to={`/${elem.id.videoId}`}>
                        <img className="screenshot"  src={elem.snippet.thumbnails.default.url} alt="video"></img>
                        </Link>
                   )                  
               }
                )}
           </div>
        )
};
