import React from "react";
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { ToastContainer, toast } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        EditTodo: {},
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo],
        })
        // this.props.addNewTodo(todo);

        toast.success("wow so easy!!!");

    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos,
        })
        toast.success("Delete is Success !!!");
    }

    handleEditTodo = (todo) => {
        let { EditTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(EditTodo).length === 0;

        if (isEmptyObj === false && EditTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];

            let objIndex = listTodosCopy.findIndex((item => item.id == EditTodo.id));

            listTodosCopy[objIndex].title = EditTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                EditTodo: {},

            })
            toast.success("Edit Success !!!");
            return;
        }

        this.setState({
            EditTodo: todo,
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.EditTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            EditTodo: editTodoCopy,
        })
    }

    render() {

        let { listTodos, EditTodo } = this.state;
        let isEmptyObj = Object.keys(EditTodo).length === 0;

        return (
            <>
                <p>
                    hello word
                </p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>{index} - {item.title}</span>
                                            :
                                            <>
                                                {EditTodo.id === item.id ?
                                                    <span>
                                                        {index} - <input
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                            value={EditTodo.title} />
                                                    </span>
                                                    :
                                                    <span>{index} - {item.title}</span>
                                                }
                                            </>

                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmptyObj === false && EditTodo.id === item.id ? 'Save' : 'Edit'}
                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >Delete</button>
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