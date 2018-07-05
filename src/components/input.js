import React from 'react';

export default class Input extends React.Component {
    render(){
        const Element = this.props.element || 'input';
    
    return (
        <div className="form-input">
            <Element
                    {...this.props.input}
                    
                    type={this.props.type}
                    ref={input => (this.input = input)}
                ></Element>
        </div>
    )
}
}