import React from "react";
import { ToastContainer, toast } from 'react-toastify';


class AddTodo extends React.Component {

    state = {
        title: '',
    }


    handleChangeTittle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error("Missing !!!");
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,
        }

        this.props.addNewTodo(todo);
        this.setState({
            title: '',
        })
    }



    render() {
        let { title } = this.state;
        return (

            <div className="add-todo">
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTittle(event)} />
                <button type="button" className="add" onClick={() => this.handleAddTodo()}>Add</button>

            </div>
        )
    }
}

export default AddTodo;