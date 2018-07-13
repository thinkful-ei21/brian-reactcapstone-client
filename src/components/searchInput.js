import React from 'react';

export default function SearchFormInputs(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="search">Search</label>&emsp;
            <input
                
                type="search"
                id="search"
                name="search"
                placeholder="my title" 
                onChange={e => props.onChange(e.target.value)}
            />
        </form>
    );
}