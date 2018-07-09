import React from 'react';
import {reduxForm, Field} from 'redux-form'

class SearchForm extends React.Component{
   
    onSubmit(values){
        this.props.dispatch(fetchSearch(values));
        
    }


    
    render(){


        return(
            <div className="search-form" >
                <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>   
                    <label htmlFor="title">Title</label>
                    <Field name="title" id="title" type="text" component={Input}/>
                        
                    <label htmlFor="lyrics">Lyrics</label>
                    <Field name="lyrics" id="lyrics" type="text" component={Input}/>
                    <button type="submit"
                    disabled={this.props.pristine || this.props.submitting}>Submit song</button> 
                </form>    
                <ul className="searchResults">
                   
                </ul>   
                
            </div>
        )
    }
}

export default reduxForm({
    form: 'search'
})(LyricCreator)