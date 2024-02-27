const App = () => (
    <div>
        <Tweet name="Esther" username="nicki" date={new Date().toDateString()} message="This is a random tweet"/>
        <Tweet name="Esther" username="nicki" date={new Date().toDateString()} message="This is a random tweet"/>
        <Tweet name="Esther" username="nicki" date={new Date().toDateString()} message="This is a random tweet"/>
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)