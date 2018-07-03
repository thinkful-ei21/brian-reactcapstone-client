import React from 'react';
import {fetchLyrics} from '../actions/lyrics'
import {connect} from 'react-redux';
class LyricCreatorOutput extends React.Component {
   
    componentDidMount(){
        this.props.dispatch(fetchLyrics())
    }
   
    render(){
        const outputs = this.props.outputs.map((output,index) => 
        ( <li key={index}> {output.title}</li> ))
    
    return (
        <div className="form-input">
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