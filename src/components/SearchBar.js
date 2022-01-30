import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {

    // state = {
    //     text: ''
    // }

    // handleFormSubmit = (event) => {

    // }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
            <div className="row mb-5">
                <div className="col-10">
                    <input 
                        type="text" className="form-control" 
                        placeholder="Seach a movie" 
                        // onChange={v => this.setState({text: v.target.value})}
                        onChange={this.props.searchBarProp}
                        // value={this.state.text}
                    />
                </div>
                <div className="col-2">
                    <Link type="button" to = "/add"
                            className="btn btn-md btn-danger"
                            style={{float:'right', width: '100%'}}>Add Movie
                    </Link>
                </div>
            </div>
        </form>
        )
    }

}

export default SearchBar;