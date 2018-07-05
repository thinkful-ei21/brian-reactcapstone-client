import React from 'react';
import Input from './input';
import {reduxForm, Field} from 'redux-form'
import {postLyrics} from '../actions/lyrics'
import LyricCreatorOutput from './lyricCreatorOutput'
import './lyricCreator.css'
class LyricCreator extends React.Component{
   
    onSubmit(values){
        this.props.dispatch(postLyrics(values));
        
    }


    
    render(){


        return(
            <div className="creatorBoard" >
                <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>   
                    <label htmlFor="title">title</label>
                    <Field name="title" id="title" type="text" component={Input}/>
                        
                    <label htmlFor="lyrics">lyrics</label>
                    <Field name="lyrics" id="lyrics" type="text" component={Input}/>
                    <button type="submit"
                    disabled={this.props.pristine || this.props.submitting}>submit title</button> 
                </form>    
                <ul className="lists">
                    <LyricCreatorOutput/>
                </ul>   
            </div>
        )
    }
}

export default reduxForm({
    form: 'creator'
})(LyricCreator)