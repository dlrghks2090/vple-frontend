
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .no-login {
        margin-left: auto;
        padding: 40px 40px;
        color: #B5B5B5;
        text-decoration: underline;
        
    }
`;
export const WrapLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding-top: 20vh;
    
    .logo-icon {
        width: 35vw;
    }
    .catch-phrase {
        
    }
    .kakao {
        width: 30px;
        
    }
    .login-btn {
        display: flex;
        gap: 4px;
        width: 80vw;
        height: 50px;
        border-radius: 8px;
        background-color: #FFEB3B;
        align-items: center;
        justify-content: center;
    }
    span {
        font-weight: 600;
        padding-top: 3px;
    }

`;
