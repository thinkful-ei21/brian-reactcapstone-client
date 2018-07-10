import React from 'react';
import {fetchLyrics} from '../actions/lyrics'
import {deleteLyrics} from '../actions/lyrics'
import {connect} from 'react-redux';

class LyricCreatorOutput extends React.Component {
   
    componentDidMount(){
        this.props.dispatch(fetchLyrics())
    }
   
    deleteCard(id){
        return this.props.dispatch(deleteLyrics(id))
    }


    render(){console.log(this.props.outputs);
        const outputs = this.props.outputs.map((output,index) => 
        (<div key={index} className="list-wrapper"> <li> {output.title} </li> 
        <li>  {output.lyrics}</li> 
        <button onClick={()=>this.deleteCard(output.id)}>cancel </button></div>
        ));
    
    return (
        <div className="form-output">
             {outputs}
             
        </div>
    )
}
}
const mapStateToProps = function(state){
    return {
        outputs: state.createdlyrics.lyrics
    }
}


export default connect(mapStateToProps)(LyricCreatorOutput)