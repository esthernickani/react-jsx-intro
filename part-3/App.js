const App = () => (
    <div>
        <Person personname="Esther" age={19} hobbies={["reading", "singing"]}/>
        <Person personname="Feranmi" age={9} hobbies={["walking", "exercising"]}/>
        <Person personname="Kilani" age={43} hobbies={["watching movies", "singing"]}/>
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)