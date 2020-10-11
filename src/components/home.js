import React, { Component } from 'react';
import fire from '../shared/firebase';
import { Container, Button } from '@material-ui/core';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.doLogout = this.doLogout.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    doLogout(e){
        e.preventDefault();
        fire.auth().signOut()
        .then((user)=>{
            alert(user.email+' Signed Out Successfully!');
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render() {
        return (
            <Container maxWidth="md" fixed>
                <h3>
                    Hola {this.props.user}!!
                </h3>
                <Button variant="outlined" type="submit" onClick={(e)=>this.doLogout(e)}>Logout</Button>
            </Container>
        )
    }
}
