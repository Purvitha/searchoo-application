import React from 'react'

class MovieRow extends React.Component{

  viewMovie(){
    // console.log("tryingg..")
    // console.log(this.props.mov.title)
    const url="https://www.themoviedb.org/movie/"+ this.props.mov.id
    window.location.href=url
  }

render(){
    return<table key={this.props.mov.id}>
    <tbody>
      <tr>
        <td>
          <img alt="poster" width="120" src={this.props.mov.poster_src}/>
        </td>
        <td>
         <h3> {this.props.mov.title}</h3>
          <p>{this.props.mov.overview}</p>
          <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
        </td>
      </tr>
    </tbody>
  </table>
}
} 
export default MovieRow