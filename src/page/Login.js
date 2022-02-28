import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';






function Login(props) {
    const history = useHistory();
    const dispatch = useDispatch();

    const [id, setId] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleIdInput = (e) => {
        setId(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        if (id === "" || password === "") {
            window.alert("아이디 혹은 비밀번호가 공란입니다.")
            return;
        }
        //dispatch(userActions.loginDB(id, password));
        
    }



    return (
        <>
       
    </>
    );
}

export default Login;