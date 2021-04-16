import "./App.scss"

const Person = props => {
    return (
        <div className="person-card">
            {props.id} <br /> {props.name}
        </div>
    );
}

export default Person;