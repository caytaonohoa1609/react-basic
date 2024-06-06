import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUser from './Users/ListUsers';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import DetailUser from './Users/DetailUser';
import {
  // Link,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";


/**
 * 2 components: class component | function component ( function, arrow)
 * Mục đính tạo ra component để khởi tạo code độc lập với nhau, không bị phụ thuộc vào nhau
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
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
        
         
          
          
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/todo">
              <ListTodo/>
            </Route>
            <Route path="/about">
              <MyComponent/>
            </Route>
            <Route path="/user" exact>
              <ListUser/>
            </Route>
            <Route path="/user/:id">
              <DetailUser/>
            </Route>
          </Switch>
          
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
