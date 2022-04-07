import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class DetailUser extends React.Component {

    state = {
        user: {},
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {},
            })
            console.log('this res : ', res);
        }
    }

    handleBackButton = () => {
        this.props.history.push('/user');
    }

    render() {
        console.log('this props', this.props);
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <>
                <div>Hello User {this.props.match.params.id}</div>
                {isEmptyObj === false &&
                    <>
                        <div>name: {user.first_name} - {user.last_name}</div>
                        <div>name: {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                    </>
                }
                <div>
                    <button type='button' onClick={() => this.handleBackButton()}>back</button>
                </div>
            </>
        )
    }
}

export default withRouter(DetailUser);