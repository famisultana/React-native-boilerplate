import React, { Component } from 'react';
import { Text } from 'react-native';
import {signIn} from '../../Redux/actions'
import { connect } from 'react-redux';
import { Wrapper } from '../../Components';

class SignIn extends Component {
    render() {
        return (
            <Wrapper>
                <Text 
            onPress={()=>this.props.signIn({isSignedIn:true})}            
            style={{fontSize:30,alignSelf:'center',marginTop:100}}>Sign in</Text>
            </Wrapper>
        );
    }
}

export default connect(null,{signIn})(SignIn)