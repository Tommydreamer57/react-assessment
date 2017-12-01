import React, { Component } from 'react';

export default class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.redirect = this.redirect.bind(this)
    }
    handleChange(target, value) {
        this.setState({
            [target]: value
        })
    }
    redirect(user) {
        if (user.id) {
            this.props.history.push('browse')
        }
    }
    render() {
        // console.log(this.state)
        // console.log(this.props)
        return (
            <div className="Auth">
                Username
                <input type="text" value={this.state.username} onChange={e => this.handleChange('username', e.target.value)} />
                Password
                <input type="password" value={this.state.password} onChange={e => this.handleChange('password', e.target.value)} />

                <div className="auth-buttons">
                    <button className="button" onClick={() => this.props.register(this.state.username, this.state.password).then(this.redirect)} >Register</button>
                    <button className="button" onClick={() => this.props.login(this.state.username, this.state.password).then(this.redirect)}>Login</button>
                </div>

            </div>
        )
    }
}
