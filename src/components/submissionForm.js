import React from 'react';
import FormInput from './forminput';
import {reduxForm, Field} from 'redux-form';
import {postLyrics} from '../actions/lyrics';
//const {textarea} = React.DOM;
import './submissionForm.css'
 class SubmissionForm extends React.Component{

    onSubmit(values){
        this.props.dispatch(postLyrics(values));
    }
////TODO: style text are better
    render(){
        return(
          <div className= "submit-lyric-form">
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>

            <label htmlFor="title" className="title">Title</label>

            <Field name="title" className="title-input" id="title" type="text" component={FormInput}/>

            <label htmlFor="lyrics" className="lyrics">Lyrics</label>

            <Field name="lyrics" className="lyrics-input" id="lyrics" type="text" rows="5" cols="40" component='textarea' className='form-input'/>

            <button type="submit" className="button"
            disabled={this.props.pristine || this.props.submitting}>Submit song</button>

            </form>
         </div>
        )
    }



}
export default reduxForm({
    form: 'creator'
})(SubmissionForm)
