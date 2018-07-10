import React from 'react';
import Input from './input';
import {reduxForm, Field} from 'redux-form'
import {postLyrics} from '../actions/lyrics'
import LyricCreatorOutput from './lyricCreatorOutput'
import Card from './card.js'
import './lyricCreator.css'
import './lyricCreatorOutput.css'
import SearchForm from './search-form'
class LyricCreator extends React.Component{
   
    onSubmit(values){
        this.props.dispatch(postLyrics(values));  
    }

    render(){
        return(
            <div className="creatorBoard" >
                <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>   
                    <label htmlFor="title">Title</label>
                    <Field name="title" id="title" type="text" component={Input}/>
                        
                    <label htmlFor="lyrics">Lyrics</label>
                    <Field name="lyrics" id="lyrics" type="text" component={Input}/>
                    <button type="submit"
                    disabled={this.props.pristine || this.props.submitting}>Submit song</button> 
                </form>    
                <ul className="lists">
                    <LyricCreatorOutput/>
                </ul>   
                <SearchForm/>
            </div>
        )
    }
}

export default reduxForm({
    form: 'creator'
})(LyricCreator)