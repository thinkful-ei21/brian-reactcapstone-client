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

    ///TODO: -> LYRIC 22-24
    //TODO: ->lyric = lyriccreator output
    ///TODO: <P> FOR EACH LINE (also capture each index)
    //TODO: do onclick for each line

    render(){console.log(this.props.outputs);
        const outputs = this.props.outputs.map((output,index) =>
        (
          <li key={output.id} contentEditable="true">
            <h2>{output.title}</h2>
            {
                output.lyrics.split(`\n`)
                   .map(x => x.trim())
                   .map((x,i) => <p key={i}>{i}-{x }</p>)
            }
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
