const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Esther"/>
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById("root")
)