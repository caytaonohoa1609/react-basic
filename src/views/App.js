import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

/**
 * 2 components: class component | function component ( function, arrow)
 * 
 * component của react sử dụng JSX
 * 
 * frameword của react có gì đặc biệt so với các frameword khác là sử dụng một cú pháp JSX
 * JSX chính là một function hay là một hàm của JavaScript thay vì trả về một biến thì sẽ 
 * trả về một đống HTML. Thì đây ta sẽ code HTML bên trong Javascript thì đấy chính là JSX
 * 
 */


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with React.js (Co Len Anh Huy)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent/>
      </header>
    </div>
  );
}

export default App;
