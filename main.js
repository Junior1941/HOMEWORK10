const root = ReactDOM.createRoot(document.querySelector('#root'));

function Counter() {
        return (
            <div className="counter">
                <button class="color1">+</button>
                <h2>{0}</h2>
                <button class="color2">-</button>
                <button class="color3">C</button>
                <button class="color4">X</button>
            </div>
        )
    }
    

function App(){
    return (
        <div className="counter1">
            <h1 class="f">Today : {new Date().toDateString()}</h1>
            <h1 className="Sum">Sum = 0</h1>
            <button class="color5"> Add Counter</button>
            <Counter />
        </div>
    );
}



root.render(<App />)