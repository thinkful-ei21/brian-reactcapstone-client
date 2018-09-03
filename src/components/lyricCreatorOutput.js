import React from 'react';
import {fetchLyrics} from '../actions/lyrics'
import {deleteLyrics} from '../actions/lyrics'
import {connect} from 'react-redux';
import CommentCard from './commentCard';
import CommentForm from './commentForm'
import Lyric from './lyric';
//import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

class LyricCreatorOutput extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      showform: false
    }
  }
    componentDidMount(){
        this.props.dispatch(fetchLyrics())
        this.props.dispatch(fetchProtectedData());
    }

    deleteCard(id){
        return this.props.dispatch(deleteLyrics(id));
    }


    ///TODO: -> LYRIC 22-24
    //TODO: ->lyric = lyriccreator output
    ///TODO: <P> FOR EACH LINE (also capture each index)
    //TODO: do onclick for each line
    ///line 51 is unfinished ?
    makeComment(lyric){
      //console.log(lyric);
      this.setState({
        showform: true
      })
    }


///todo make makeacomment() function, test it with console.console.log();
//
    render(){console.log(this.props.outputs);
        const outputs = this.props.outputs.map((output,index) =>
        (
          <li key={output.id} >
            <h3>Username: {this.props.username}</h3>
            <h2>{output.title}</h2>

            <Lyric {...output} onClick={(lyric) => this.makeComment(lyric)}/>
            <button onClick={()=>this.deleteCard(output.id)}>Delete</button>

            { this.state.showform ?  <CommentForm lyricsID={output.id} lyricLine={this.state.selectedLyricLine}/> : null}

            <CommentCard lyricsID={output.id}/>
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
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        outputs: state.createdlyrics.lyrics
    }
}


export default connect(mapStateToProps)(LyricCreatorOutput)
