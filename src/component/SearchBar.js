import React from 'react';

class SearchBar extends React.Component{
    
    state = { inputText: "" }

    onSubmit = event => {
        event.preventDefault();
        //pass the inputText to onFormSubmit
        this.props.onFormSubmit(this.state.inputText);
    }

    onTextChange = event => {
        this.setState({ inputText: event.target.value })
        
    }

    render() {
        return (
            <div className="card mt-3 shadow-sm">
                <form className="row" onSubmit={this.onSubmit}>
                    <div className="col-1"></div>
                    <div className="col-10">
                        <label htmlFor="exampleFormControlInput1" className="form-label fw-bold mt-2">VideoSearch</label>   
                        <input type="text"
                            className="form-control d-inline-block mb-3"
                            id="exampleFormControlInput1"
                            value={this.state.inputText}
                            onChange={this.onTextChange}
                        />    
                    </div>
                    <div className="col-1"></div>
                </form>
            </div>
        )
    }
}

export default SearchBar