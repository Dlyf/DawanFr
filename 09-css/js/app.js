function Button(props) {
    const classCss = `btn ${props.typeCss}`;
    return (
        <button className={classCss}>
            {props.children}
        </button>
    );
}

function App() {
    const monStyle = {
        width: '300px',
        backgroundColor: 'aqua',
        fontSize: '16px'
    }
    let isActive = false;
    return (
        <div>
            {/* Les premieres accolades c'est pour utiliser une expression Javascript  */}
            <h1 style={ {color: 'blue'} }>Rouge</h1>
            <h2 style={monStyle}>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sint alias esse modi! Ipsa molestias sequi delectus et optio cupiditate, vitae distinctio corporis deleniti iste inventore quis, incidunt modi fuga?</p>
            <p className={ isActive ? '' : 'text'}>
                Lorem 
            </p>
            <Button typeCss="danger">Cliquez ici</Button>
            <Button typeCss="success">Cliquez ici</Button>
        </div>
    );
}
ReactDOM.render(<App/>, document.getElementById('root'));