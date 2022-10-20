import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --gray-0: #F8F9FA;
    --gray-1: #868E96;
    --gray-2: #343B41;
    --gray-3: #212529;
    --gray-4: #121214;
    --negative: #E83F5B;
   
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    list-style: none;
}

body{
background-color: var(--gray-4);

font-family: 'Inter', sans-serif;
}

span{
    font-size: 8px;
    font-weight: 200;
}

input,select{
    background-color: var(--gray-2);
    border: 0.0625rem solid transparent;
    border-radius: 0.1875rem;
    width: 90%;
    max-width: 540px;
    height: 2.4063rem;
    color: var(--gray-0);
    padding-left: 0.75rem;
    margin-top: 8px;
}
input:hover,select:hover{
    background-color: var(--gray-1);
}
input:focus,select:focus{
    border: 0.0625rem solid var(--gray-0);
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
label{
    font-size: 12px;
    display: flex;
    justify-content: flex-start;
    width: 90%;
}

input::placeholder{
    color: var(--gray-0);
}

input:hover::placeholder{
    color: var(--gray-0);
}

button{
width: 90%;
height: 2.4063rem;
background-color: var(--color-primary);
border: 0.0761rem solid var(--color-primary);
border-radius: 0.25rem;
color: var(--gray-0);
cursor: pointer;
}

button:hover{

}

:disabled{
    background-color: var(--color-primary-negative);
    border: var(--color-primary-negative);
}
`;

export default GlobalStyle;
