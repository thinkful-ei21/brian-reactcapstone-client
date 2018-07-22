import React from 'react';
import {fetchLyrics} from '../actions/lyrics'
import {deleteLyrics} from '../actions/lyrics'
import {connect} from 'react-redux';
import CommentCard from './commentCard';
import CommentForm from './commentForm' 
import Lyric from './lyric';
class LyricCreatorOutput extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchLyrics())
    }

    deleteCard(id){
        return this.props.dispatch(deleteLyrics(id));
    }

    
    ///TODO: -> LYRIC 22-24
    //TODO: ->lyric = lyriccreator output
    ///TODO: <P> FOR EACH LINE (also capture each index)
    //TODO: do onclick for each line

    render(){console.log(this.props.outputs);
        const outputs = this.props.outputs.map((output,index) =>
        (
          <li key={output.id} contentEditable="true">
            <h2>{output.title}</h2>
           
            <Lyric {...output} onClick/>
            <button onClick={()=>this.deleteCard(output.id)}>Delete</button>
            
            <CommentForm lyricsID={output.id}/>
            <CommentCard lyricsID={output.id}/>
          </li>
        )); console.log(outputs);

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
