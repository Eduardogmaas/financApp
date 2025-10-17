//Só copiei e colei da SignIn

import React from "react";
import {View, Text, StyleSheet} from "react-native";

type SignUpProps = Record<string, never>;

type SignUpState = Record<string, never>;

export default class SignUp extends Component<SignUpProps, SignUpState>{
    render(){
        return(  
            <View style={styles.container}>
                <Text>Tela Cadastro</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    }
})