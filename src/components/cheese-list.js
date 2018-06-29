import React from 'react'
import { fetchCheeses } from '../actions/cheese';
import { connect } from 'react-redux';

 class CheeseList extends React.Component{
   
   
    componentDidMount(){
        this.props.dispatch(fetchCheeses())
    }
    render() {
        const cheeses = this.props.cheeses.map((cheese,index) => 
        ( <li key={index}> {cheese} </li> ))
   
    return (
        <div >
            <ul > {cheeses}
            </ul>
        </div>
    )

}
}

const mapStateToProps = function(state){
    return {
        cheeses: state.cheeses
    }
}

export default connect(mapStateToProps)(CheeseList)