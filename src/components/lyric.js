import React from 'react';
import LyricCreatorOutput from './lyricCreatorOutput';


export default class Lyric extends React.Component {
    render(){
      console.log(this.props);
        const lyrics =
        <div>
            {
                (this.props.lyrics || "").split("\n")
                   .map(x => x.trim())
                   .map((x,i) => <p key={i} onClick={() => this.props.onClick({
                     id:i, text: x
                   })}>{i + 1}-{x }</p>)
            }
        </div>


        return(
            <div>
                {lyrics}
            </div>
        )
    }
}
