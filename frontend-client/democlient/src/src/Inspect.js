import React from "react";

class Inspect extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            newName: ""
        };
    }

    componentDidMount() {
        this.getData();
    }
    
    getData = () => {
        fetch(`http://localhost:8080/api/v1/person/${this.props.match.params.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
          })
          .then(res => {
            return res.json()
          })
          .then(jsondata => {
            this.setState({data: jsondata})
          })
          .catch(e => console.log(e));
    }

    updateName = e => {
        this.setState({newName: e.target.value})
    }

    handleSubmit = () => {
        this.state.newName.length && 
        fetch(`http://localhost:8080/api/v1/person/${this.props.match.params.id}`,
        {
            method: "PUT",
            headers: {
              "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({name: `${this.state.newName}`})
        })
        .catch(err => console.log(err));
    }

    deletePerson = () => {
        fetch(`http://localhost:8080/api/v1/person/${this.props.match.params.id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        .then(this.props.history.push("/"))
        .catch(e => console.log(e));
    }

    render() {
    return(
        <div>
            <h1>{this.state.data.name}</h1>
            <i>{this.props.match.params.id}</i>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="https://github.com/Kyjko">GitHub</a></li>
                </ul>
            </nav>
            <div className="App">
                <h2>Change name:</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className="input-box" type="text" placeholder="New name" onChange={e => this.updateName(e)}/>
                    <input className="input-box-submit" type="submit" value="Submit" />
                </form> 
                
            </div>
            <button className="delete-button" onClick={this.deletePerson}>Delete</button>
        </div>
    )
    }
}

export default Inspect;