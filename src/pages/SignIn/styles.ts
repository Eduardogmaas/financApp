import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color:  #f4f7ff;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color:  #F0F4FF;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 60%;

`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    background-color: #FFF;
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: #121212;
    margin-botton: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    border-radius: 8px;
    background-color: #3b3dbf;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #FFF;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 10px;
    margin-botton: 10px;
`;

export const LinkText = styled.Text`
    color: #171717;
`;