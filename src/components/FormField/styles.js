import styled from "styled-components";

export const DivForm = styled.label`
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    margin: 25px;
    box-shadow: 0px 0px 5px 0px var(--primary);
    text-align: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    @media {
        display: block;
    }
`;

export const InputForm = styled.input`
    background-color:black;
    border-radius: 3px;
    margin: 5px;
    text-align: center;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-right: 50px;
    @media {
        display: block;
    }
    :focus{
        transform: scale(.6) translateY(-10px);
    }
`;

