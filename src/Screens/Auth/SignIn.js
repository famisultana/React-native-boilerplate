import React, { Component } from 'react';
import { Text } from 'react-native';
import {signIn} from '../../Redux/actions'
import { connect } from 'react-redux';

class SignIn extends Component {
    render() {
        return (
            <Text 
            onPress={()=>this.props.signIn({isSignedIn:true})}            
            style={{fontSize:30,alignSelf:'center',marginTop:100}}>Sign in</Text>
        );
    }
}

export default connect(null,{signIn})(SignIn)