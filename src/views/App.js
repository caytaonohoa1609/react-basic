import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple Todo Apps with React.js (Hy Vong &amp; Co Len Anh Huy)
        </p>
        {/* <MyComponent/> */}
        <ListTodo/>
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
  );
}

export default App;
