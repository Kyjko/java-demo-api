import "./App.scss"

const Person = props => {
    return (
        <a href={`/person/${props.id}`} className="person-card">
            <div className="person-card-id">{props.id}</div><div className="person-card-name">{props.name}</div>
        </a>
    );
}

export default Person;