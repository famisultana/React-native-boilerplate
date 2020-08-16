import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { signOut } from '../../Redux/actions'
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <View>
                <Text
                    style={{ fontSize: 30, alignSelf: 'center', marginTop: 100 }}>Home</Text>
                <Text
                    onPress={() => this.props.signOut()}
                    style={{ fontSize: 30, alignSelf: 'center', marginTop: 100 }}>Sign Out</Text>
            </View>
        );
    }
}

export default connect(null, { signOut })(Home)