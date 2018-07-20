import React from 'react';
import Input from './input';
import {reduxForm, Field} from 'redux-form';
import {postLyrics} from '../actions/lyrics';
//const {textarea} = React.DOM;

 class SubmissionBoard extends React.Component{

    onSubmit(values){
        this.props.dispatch(postLyrics(values));
    }
////TODO: style text are better
    render(){
        return(

            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            <label htmlFor="title">Title</label>
            <Field name="title" id="title" type="text" component={Input}/>
            
            <label htmlFor="lyrics">Lyrics</label>
            <Field name="lyrics" id="lyrics" type="text" component='textarea' className='form-input'/>
            <button type="submit"
            disabled={this.props.pristine || this.props.submitting}>Submit song</button>
            </form>

        )
    }



}
export default reduxForm({
    form: 'creator'
})(SubmissionBoard)
