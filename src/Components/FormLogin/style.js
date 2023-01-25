import styled from 'styled-components';

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
    min-height: 350px;
    background-color: #2e3138;
    margin: auto;
    padding: 10px;
    border-radius: 20px;
    margin-top: -100px;
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
`;

export const Image = styled.img`
    margin-top: 5vh;
    margin-bottom: 5vh;
    width: 150px;
    height: 70px;
`;

export const Button = styled.div`
    background-color: #1c408a;
    padding: 20px;
    margin-bottom: 5px;
    width: 50%;
    height: 10px;
    text-align: center;
    display: flex;
    border-radius: 10px;
    border: 1px solid transparent;
    justify-content: center;
    font-weight: bold;
    align-items: center;
    text-align: center;
    cursor: pointer;

    h1 {
        font-size: 20px;
        color: #ffffff;
        margin-left: 5px;
        /* margin-bottom: 1px; */
        font-family: 'Quicksand', 'Poppins',sans-serif;
    }
`;

export const Input = styled.div`
    display: flex;
    font-family: inherit;
    color: #ffffff;
    font-size: 1.0rem;
    flex-direction: column;
    margin-bottom: 20px;
    
    h2 {
        font-size: 8px;
        margin-left: 5px;
        margin-bottom: 1px;
        font-family: 'Quicksand', 'Poppins',sans-serif;
    }

    input { 
        background: #545e6a;
        border-radius: 15px;
        font-family: inherit;
        color: #ffffff;
        font-weight: inherit;
        font-size: 0.9rem;
        height: 30px;
        width: 20vw;
        padding: 10px;
        border: 1px solid #545e6a;
    }
`;