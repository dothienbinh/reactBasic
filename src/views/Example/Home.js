import React from 'react';
// import { withRouter } from "react-router";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import { connect } from 'react-redux';

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todos')
        // }, 3000)
    }

    handleDeleteUser = (user) => {
        console.log('user: ', user);
        this.props.deleteUserRedux(user);
    }

    handleAddUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log('check props', this.props);
        let ListUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello world from home
                </div>
                <div>
                    {ListUsers && ListUsers.length > 0 &&
                        ListUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleAddUser()}>Add new</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'ADD_USER' }),
    }
}

// export default withRouter(Home); 
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home)); 