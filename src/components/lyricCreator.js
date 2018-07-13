import React from 'react';
import Input from './input';
import {reduxForm, Field} from 'redux-form';
import {postLyrics} from '../actions/lyrics'
import LyricCreatorOutput from './lyricCreatorOutput'
import Onboard from './onBoard'
import SubmissionBoard from './submissionForm'
import './lyricCreator.css'
import './lyricCreatorOutput.css'
//import SearchForm from './search-form'
export default class LyricCreator extends React.Component{

    

    render(){
        return(
            <div className="creatorBoard">
                <Onboard/>
              <div className="y-wrap">
               <SubmissionBoard/>
                
                <ul className="lists">
                <a id="link here"></a>
                    <LyricCreatorOutput/>
                    
                </ul>
                
              </div>
            </div>
        )
    }
}


