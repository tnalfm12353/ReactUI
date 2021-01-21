import React from 'react';
import styled from 'styled-components';
import SignUpForm from './SignUpForm.jsx';

class SignUp extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            //value
            username:'', //id 
            password:'',
            checkPassword:'',
            nickname:'',
            //validate -> for checking mark 
            validPW:false,
            validCPW:false,
            //validate from DB
            isIdExist:false,   //if id existed in database return false. 
            isNickExist:false, //if nickname existed in database return false.

            //Erorr messages
            idErrorMSG:'',
            nickErrorMSG:'',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }
    /* -------------------- input 값 받기 ------------------------------*/
    handleEnterKey(e){
        if(e.key == 'Enter'){
            this.handleSignUp();
        }
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value},this.validation(e))
    }
    
    /* -------------------- Validation ------------------------------*/
    validation(e) {
        const IDcheck = /^(?=.*[a-zA-Z]).{4,12}$/;
        const PWCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/;
        const nickCheck = /^[가-힣|a-z|A-Z|0-9].{1,10}$/;
        const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;

        const blur = document.getElementById('id-input');

        switch(e.target.name){
            case "username":
                if (IDcheck.test(e.target.value) && !regExp.test(e.target.value)) {
                    this.isExist(e.target.name, e.target.value);
                } else {
                    this.setState({isIdExist: false, idErrorMSG: "특수문자를 제외한 4~12자"});
                }break;
            case "password":
                if (PWCheck.test(e.target.value)) {
                    this.setState({validPW: true});
                } else {
                    this.setState({validPW: false});
                }break;
            case "checkPassword":
                if (e.target.value === this.state.password) {
                    this.setState({validCPW: true});
                } else {
                    this.setState({validCPW: false});
                }break;
            case 'nickname':
                if (nickCheck.test(e.target.value) && !regExp.test(e.target.value)) {
                    this.isExist(e.target.name, e.target.value);
                } else {
                    this.setState(
                        {isNickExist: false, nickErrorMSG: "특수문자를 제외한 2~10자"}
                    );
                }break;
            default:
        }
    }
    /* -------------------- Sign - Up ------------------------------*/
    handleSignUp(){
        const {isIdExist,validPW,validCPW,isNickExist} = this.state;
        const {isSimpleSignUp} = this.props;
        if(isIdExist&&validPW&&validCPW&&isNickExist){
            
        }else{
            const signUpBtn = document.getElementById("sign-up-btn");
            // signUpBtn.style.color="#e64980";
            // signUpBtn.style.boxShadow = "0px 5px 6px 3px rgba(90,29,50,0.16)";
        }
    }

    render(){
        const {isSimpleSignUp} = this.props;
        const {validPW,validCPW,isIdExist,isNickExist,idErrorMSG, nickErrorMSG} = this.state;
        const {handleEnterKey,handleChange, handleSignUp} =this;
        return(
            <div>
                <SignUpForm
                    isSimpleSignUp = {isSimpleSignUp}
                    /*validation*/
                    validPW={validPW}
                    validCPW={validCPW}
                    isIdExist={isIdExist}
                    isNickExist={isNickExist}

                    idErrorMSG = {idErrorMSG}
                    nickErrorMSG = {nickErrorMSG}

                    onKeyPress={handleEnterKey}
                    onChange ={handleChange}
                    signUp = {handleSignUp}
                />
            </div>
        )
    }
}

export default SignUp;
