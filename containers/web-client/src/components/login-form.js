import React from 'react'

function submitLogin (data = {}) {
  const url = '/api/tokens'

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data),
  }

  return fetch(url, options)
    .then(res => res.json())
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(event) {

    submitLogin(this.state)
      .then(console.log)

    event.preventDefault()
  }

  handleInputChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username
          <input
            name="username"
            type="text"
            checked={this.state.username}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Password
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit"/>
      </form>
    )
  }
}

export default LoginForm
