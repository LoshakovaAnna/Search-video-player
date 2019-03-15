import React from 'react';

import SearchResult from '../Components/SearchResult';

import axios from 'axios';
export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          search:"",
          resultSearch:[]    
        }
      }
      
      handleInput = (e) => {
        const { name, value } = e.target;
         this.setState( { [name]: value } ); 
         //console.log(this.state);
         
      }
      handleSearch = () =>{
        const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBrmaj7j0yIJGWcGPYH3THz_Rh8BYAtlQs&q="   + this.state.search + "&type=video";
           // console.log("url",url);
            ////console.log("search",this.state.search);
            
        axios(url).then(
          data => {
            //console.log(data);
            //console.log(data.data.items);
            this.setState({resultSearch : data.data.items});
          }
        )
      }
    render(){
        return(
            <div>
               <h1>Hompe Page</h1>   
               <div className="search-row d-flex flex-row justify-content-between">
                <input name="search" placeholder="search"
                     value={this.state.search} onChange={this.handleInput}></input>
                <button  className="btn btn-danger btn-sm" 
                    onClick={this.handleSearch}>
                    search
                </button>
                </div>
                <SearchResult resList={this.state.resultSearch} />
            </div>
            
        )
    }
  
}