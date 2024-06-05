import React from "react";
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Tu' },
            { id: 'todo2', title: 'Meo' },
            { id: 'todo3', title: 'Cao' }
        ],

        editTodo: {}
    }

    addNewTodo = (todo) => {
        // let currentListTodo = this.state.listTodos;
        // currentListTodo.push(todo);

        this.setState({
            listTodos: [...this.state.listTodos, todo],
            // listTodos: currentListTodo
        })

        toast.success("Wow so easy!")
    }

    handleDeleteTodo = (todo) => {
        let currenTodos = this.state.listTodos;
        currenTodos = currenTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currenTodos
        })
        toast.success("Delete succeed!")
        
    }

    handleEditTodo = (todo) => {
        let {editTodo, listTodos} = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0; 
        
        //save
        if(isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos]

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            
            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update Todo succeed!")
            return;
        }  
        //edit
        this.setState({
            editTodo: todo
        })
        
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let {listTodos, editTodo} = this.state;
        // let listTodos = this.state.listTodos;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>> check empty object: ', isEmptyObj)

        return (
            <>
             <p>
                Simple Todo Apps with React.js (Con Tho Con Hy Vong)
            </p>
            <div className="list-todo-container">
                <AddTodo
                addNewTodo = {this.addNewTodo}
                />
                <div className="list-todo-content">
                    { listTodos && listTodos.length > 0 &&  
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span> {index + 1} - {item.title} </span> 
                                        :
                                        <>
                                        { editTodo.id === item.id ?
                                            <span>
                                                {index + 1} - <input 
                                                value={editTodo.title} 
                                                onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                />
                                            </span>
                                            :
                                            <span>
                                                {index + 1} - {item.title}
                                            </span>
                                        }
                                        </>
                                    }
                                    <button 
                                        className="edit" 
                                        type="button"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button 
                                        className="delete" 
                                        type="button"
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )
                        })
                    
                    }
                    
                </div>

            </div>
            </>
        )
    }
}

export default ListTodo;