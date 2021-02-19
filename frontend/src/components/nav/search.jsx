import React from 'react'
import {Link} from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchUser:"",
        }

        this.closeResults = this.closeResults.bind(this)
        
    }
    componentDidMount() {
        document.addEventListener("click", this.closeResults, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.closeResults);
    }

    closeResults(e) {
        debugger
        if (this.state.searchUser.length > 0) {

            this.setState({ searchUser: "" });

        }
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    render(){

        let filteredUsers = this.props.users.filter( user => {
            return user.username.toLowerCase().includes(this.state.searchUser.toLowerCase()) || user.firstname.toLowerCase().includes(this.state.searchUser.toLowerCase()) || user.lastname.toLowerCase().includes(this.state.searchUser.toLowerCase())
        })

        let users = filteredUsers.map(user => {
            debugger
            return(

                <Link className="search-link" to={`/portfolio/${user._id}`}>
                    <div className="search-results">
                        <img className="search-propic" src={`content/image/${user.propic}`} alt=""/>
                            <div className="search-user-name">
                                <p className="search-username">{user.username}</p>
                                <p className="search-name">{`${user.firstname} ${user.lastname}`}</p>
                            </div>
                    </div>
                </Link>
            )
        }) 
  
        return (
            <div>
            <input className="search-bar" type="input" placeholder="search" onChange={this.handleChange("searchUser")} onClick={this.handleCLick}/>
            <div className="search-items">
                {this.state.searchUser === "" ? null : users}
            </div>
            </div>
        )
    }
}

export default SearchBar