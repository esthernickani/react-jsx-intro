const Tweet = (props) => {
    return <div>
        <h2>{props.message}</h2>
        <span className="name">{props.name}</span>
        <span className="username">{props.username}</span>
        <span className="date">{props.date}</span>
    </div>
}
