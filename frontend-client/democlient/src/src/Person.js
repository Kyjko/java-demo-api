import "./App.scss"

const Person = props => {
    return (
        <div className="person-card">
            <div className="person-card-id">{props.id}</div><div className="person-card-name">{props.name}</div>
        </div>
    );
}

export default Person;