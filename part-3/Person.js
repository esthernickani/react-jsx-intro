const Person = ({ personname, age, hobbies}) => {
    return <div>
        <p>Learn more about this person</p>
        <h3>{age > 18 ? "Please go vote!" : "You must be 18"}</h3>
        <span>{personname.length > 8 ? personname.slice(0, 2): personname}</span>
        <p><b>Hobbies</b></p>
        <ul>
            {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </div>
}