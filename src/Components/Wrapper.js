import React, { Component } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

class Wrapper extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <SafeAreaView style={{flex:1}}>
                    {this.props.children}
                </SafeAreaView>
            </View>
        );
    }
}

export default Wrapper;