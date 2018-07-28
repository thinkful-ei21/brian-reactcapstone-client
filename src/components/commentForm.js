import React from 'react';
import {reduxForm, Field} from 'redux-form'
import FormInput from './forminput';
import {postComments} from '../actions/lyrics';
import {fetchComments} from '../actions/lyrics';
class CommentForm extends React.Component{
   
    constructor(props) {
        super(props);
        this.state ={
            editing: false
        }
    }
    
    setEditing(editing){
        this.setState({
            editing
        })
    }
    
    
     onSubmit(values){
        this.props.dispatch(postComments(values,this.props.lyricsID));
        console.log('comments work')
        this.props.dispatch(fetchComments(this.props.lyricsID))
     }
    render(){
                if(!this.state.editing){
                    return(
                    <button onClick={() => this.setEditing(true)}>add a Comment?</button>
                    );
                }
        return(
            <div className="search-form" >
             
            <p> leave a comment</p>
                <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>   
               
                    <label htmlFor="highlight">What lyric do you want to comment on?</label>
                    <Field name="highlight" id="highlight" type="text" component={FormInput}/>
                    <label htmlFor="remark">Comment</label>
                    <Field name="remark" id="remark" type="text" component={FormInput}/>
                    <button type="submit"
                    disabled={this.props.pristine || this.props.submitting}>Submit pretentious comments</button> 
                    <button onClick={() => this.setEditing(false)}>hide</button>
                </form>    
                <ul className="searchResults">
                   
                </ul>   
                
            </div>
        )
    }
}

export default reduxForm({
    form: 'search'
})(CommentForm)