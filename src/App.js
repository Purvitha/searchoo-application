import React, { Component } from 'react';
import './App.css';
import MovieRow from'./MovieRow.js'
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);
    this.state={};
    // console.log("this is my initializer");

    // const movies=[
    //   {id:0,posterpath:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    //   title:"aaa",overview:"0---aaa"},
    //   {id:1,posterpath:"https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg",
    //   title:"bbb",overview:"1---bbb"}
    // ]

    

    // var movrows=[];
    // movies.forEach((mov)=>{
    //   console.log(mov.title);
    //   const movrow=<MovieRow mov={mov}/>
    //   movrows.push(movrow)
    // })

    // this.state={rows:movrows};

    this.performSearch("avengers")
  }

  performSearch(searchTerm){
    console.log("perform search");
    const urlString="https://api.themoviedb.org/3/search/movie?api_key=bb03a5a9621f7a58f29ccc8833ad70da&query="+searchTerm
    $.ajax({
      url: urlString,
      success:(searchResults)=>{
        console.log("data fetcheddd")
        // console.log(searchResults)
        const results=searchResults.results
        // console.log(results[0])

        var movrows=[];

        results.forEach((mov) => {
        mov.poster_src="https://image.tmdb.org/t/p/w185"+mov.poster_path;
        // console.log(mov.poster_path)
        const res=<MovieRow key={mov.id} mov={mov}/>
        movrows.push(res)
        });

        this.setState({ rows:movrows})

      },
      error:(xhr,status,err)=>{
        console.error("faileddd")

      }
      
    })
  }

  searchChangeHandler(event){
    console.log(event.target.value)
    const searchTerm=event.target.value
    const bound=this;
    bound.performSearch(searchTerm);
  }

  render() {
    return (
      <div >
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app" width="50" src="play-button.svg"/>
              </td>
              <td width="8"/>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
  
        </table>
        <input style={{
          fontSize:24,
          display:'block',
          width:"99%",
          paddingTop:8,
          paddingBottom:8,
          paddingLeft:16
        }}
        onChange={this.searchChangeHandler.bind(this)}
        placeholder="enter search term"/>

        {this.state.rows}
      </div>
    );
  }
}

export default App;
