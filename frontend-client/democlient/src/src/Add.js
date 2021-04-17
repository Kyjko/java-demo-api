import React from 'react';

class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    addUser = () => {
        this.state.name.length &&
        fetch(`http://localhost:8080/api/v1/person`, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({name: this.state.name})
        })
        .then(this.props.history.push("/"))
        .catch(err => console.log(err));
    }

    updateName = e => {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <div className="i-wrapper">
                <h1>Register new User</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="https://github.com/Kyjko">GitHub</a></li>
                    </ul>
                </nav>
            <div className="add-panel">
                <form onSubmit={this.addUser}>
                    <input type="text" placeholder="Name" onChange={e => this.updateName(e)} />
                    <input type="submit" value="Add"/>
                </form>
            </div>
            </div>
        );
    }
}

export default Add;