import React from 'react';
import {fetchLyrics} from '../actions/lyrics'
import {connect} from 'react-redux';

class LyricCreatorOutput extends React.Component {
   
    componentDidMount(){
        this.props.dispatch(fetchLyrics())
    }
   
    render(){
        const outputs = this.props.outputs.map((output,index) => 
        ( <li className="list-wrapper" key={index}> {output.title} {output.lyrics}</li> ))
    
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