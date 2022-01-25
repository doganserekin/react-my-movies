import React from 'react';

class SearchBar extends React.Component {

    // state = {
    //     text: ''
    // }

    // handleFormSubmit = (event) => {

    // }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
            <div className="form-row mb-5">
                <div className="col-12">
                    <input 
                        type="text" className="form-control" 
                        placeholder="Seach a movie" 
                        // onChange={v => this.setState({text: v.target.value})}
                        onChange={this.props.searchBarProp}
                        // value={this.state.text}
                    />
                </div>
            </div>
        </form>
        )
    }

}

export default SearchBar;