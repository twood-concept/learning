import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        let txt = this.props.txt
        return <h1>{txt}</h1>
    }
}

App.proTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: 'this is the default'
}

ReactDOM.render(
    <App cat={5} txt="this is the props text" />,
    document.getElementById('app')
);

console.log('test 2');

// class App extends React.Component {
//     render(){
//         // return React.createElement('h1', null, 'Hello Tyler')
//         return <h1>Hello Sir</h1>
//     }
// }

// const App = () => <h1>Hello Mister</h1>

export default App