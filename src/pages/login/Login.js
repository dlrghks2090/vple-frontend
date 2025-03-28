import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../../asset/logo.png';
import kakao from '../../asset/kakao.png';
import {
    Container,
    WrapLogin,
} from './LoginStyle';

const CLIENT_ID = '5681ba5beb345aa85d32837edd41bde8';
// const REDIRECT_URI = `http://${window.location.host}/user/kakao/callback`;
const REDIRECT_URI = `http://localhost:3000/user/kakao/callback`;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`

export default function Login() {

    let navigate = useNavigate();
    const onClickBackHome = () => {
        navigate('/')
        window.scrollTo(0, 0)
    };

    const kakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return (
        <>
            <Container>
                <span
                    className='no-login'
                    onClick={onClickBackHome} 
                >둘러보기</span>

                <WrapLogin>
                    <img src={Logo} className='logo-icon'/>
                    <div className='catchphrase'>플랜부터 플래그까지, 비건 여행을 위한 VPLE</div>
                    <div className='login-btn' onClick={kakaoLogin}>
                        <img src={kakao} className='kakao' /><span>카카오톡으로 로그인</span>
                    </div>
                </WrapLogin>
            </Container>
        </>
    );


}
