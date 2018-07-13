import React from 'react';
import {connect} from 'react-redux';

import './card.css';

class Cardlist extends React.Component {
   //this is cards
    // componentDidMount(){
    //     this.props.dispatch(fetchLyrics())
    // }
   
    render(){console.log(this.props.outputs);
        const results = this.props.outputs.map((results,index) => 
        (<div key={index} className="searchlist-wrapper"> <li> {results.title} </li> 
        <li>  {results.lyrics}</li> 
        <button>open </button></div>
        ));
    
    return (
        <div className="search-outputs">
             {results}
        </div>
    )
}
}
const mapStateToProps = function(state){
    return {
        outputs: state.createdlyrics.lyrics
    }
}


export default connect(mapStateToProps)(SearchCard)