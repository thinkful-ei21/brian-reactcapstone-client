import React from 'react';
import Input from './input';
import {reduxForm, Field} from 'redux-form'

class LyricCreator extends React.Component{
    onSubmit(values){
        console.log(values);
        return fetch('http://localhost:8080/api/created',{
            method: 'POST',
            body: JSON.stringify(values),
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            
        })
        .then(res => console.log(res.json()))
    }


    
    render(){


        return(
            <div className="creatorBoard" >
                
             <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>   
              <label htmlFor="name">title</label>
              <Field name="title" id="title" type="text" component={Input}/>
              <button type="submit"
              disabled={this.props.pristine || this.props.submitting}>submit title</button>     
              <label htmlFor="name">lyrics</label>
              <Field name="lyrics" id="lyrics" type="text" component='input'/>
             </form>    

             <ul> 
             </ul>
            </div>

        )
    }
}

export default reduxForm({
    form: 'creator'
})(LyricCreator)