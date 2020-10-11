import React, { Component } from 'react';
import fire from '../shared/firebase';
import { FormControl, FormHelperText, Input, InputLabel, Button, Container } from '@material-ui/core';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.doLogin = this.doLogin.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    doLogin(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((user)=>{

        })
        .catch((err)=>{
            console.log(err);
        })
    }

    doSignup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then((user)=>{
            alert('Login With Your Email & Password');
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render() {
        return (
            <Container maxWidth="md" fixed>
                <h2>Login</h2>
                <FormControl>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input type="email" autoComplete="false" id="email" aria-describedby="my-email" name="email" value={this.state.email} onChange={(e)=>this.handleChange(e)}/>
                    <FormHelperText id="my-email">Enter Your Email</FormHelperText>
                </FormControl>
                <br/>
                <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input type="password" autoComplete="false" id="password" aria-describedby="my-password" name="password" value={this.state.password} onChange={(e)=>this.handleChange(e)}/>
                    <FormHelperText id="my-password">Enter Your Password</FormHelperText>
                </FormControl>
                <br/>
                <FormControl>
                    <Button onClick={(e)=>this.doLogin(e)} type="submit" variant="contained" color="secondary">Login</Button>
                </FormControl>
                <br/>
                <FormControl>
                    <Button onClick={(e)=>this.doSignup(e)} type="submit" variant="contained" color="primary">Signup</Button>
                </FormControl>
            </Container>
        )
    }
}
