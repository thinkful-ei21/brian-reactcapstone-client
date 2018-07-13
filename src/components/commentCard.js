import React from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/lyrics'
import './card.css';

class Cardlist extends React.Component {
   //this is cards
    // componentDidMount(){
    //     this.props.dispatch(fetchLyrics())
    // }
    componentDidMount(){
        this.props.dispatch(fetchComments(this.props.lyricsID))
    }
    render(){
        // if(true){
        //     return <div></div>
        // }this.props.lyricsID
        const results = this.props.results.map((result,index) => 
        (<div key={index} className="searchlist-wrapper"> 
        <li> {result.highlight} </li> 
        <li>  {result.remark}</li> 
        </div>
        ));
    
    return (
        <div className="search-outputs">
             {results}
        </div>
    )
}
}
const mapStateToProps = function(state,props){
    return {
        results: state.createdcomments.comments[props.lyricsID] || []
    }
}


export default connect(mapStateToProps)(Cardlist)