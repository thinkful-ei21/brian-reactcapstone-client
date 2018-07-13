import React from 'react';
import {fetchLyrics} from '../actions/lyrics'
import {deleteLyrics} from '../actions/lyrics'
import {connect} from 'react-redux';
import Cardlist from './commentCard';
import CommentForm from './commentForm' 
class LyricCreatorOutput extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchLyrics())
    }

    deleteCard(id){
        return this.props.dispatch(deleteLyrics(id));
    }

    

    render(){console.log(this.props.outputs);
        const outputs = this.props.outputs.map((output,index) =>
        (
          <li key={output.id} contentEditable="true">
            <h2>{output.title}</h2>
            <p>{output.lyrics}</p>
            <button onClick={()=>this.deleteCard(output.id)}>Delete</button>
            
            <CommentForm lyricsID={output.id}/>
            <Cardlist lyricsID={output.id}/>
          </li>
        ));

    return (
        <ul className="songs-list">
             {outputs}
                
        </ul>
    )
}
}
const mapStateToProps = function(state){
    return {
        outputs: state.createdlyrics.lyrics
    }
}


export default connect(mapStateToProps)(LyricCreatorOutput)
