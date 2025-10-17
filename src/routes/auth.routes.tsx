import React from "react";
import {createStackNavigator} from "@react-navigation/native/stack";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/";

export type AuthStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

type AuthRoutesProps = Record<string, never>;

type AuthRoutesState = Record<string, never>;

export default class AuthRoutes extends Component<AuthRoutesProps, AuthRoutesState>{
    render(){
        return(
            <AuthStack.Navigator screenOptions={{headerShown: false}}>
                <AuthStack.Screen name="SignIn" component={SignIn}/>
                <AuthStack.Screen name="SignUp" component={SignUp}/>
            </AuthStack.Navigator>
        );
    }
}