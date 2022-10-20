import styled from 'styled-components';

export const StyledRegisterTitle = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
width: 70%;
max-width: 25.9375rem;
min-width: 16.375rem;
height: 5rem;

.div_title_container{
  display: flex;
}

button{
    width: 85px;
    background-color: var(--gray-3);
    font-weight: 800;
    border: 1px solid var(--gray-3);
}
button:hover{
    background-color: var(--gray-2);
}
button:active{
    background-color: var(--gray-1);
}
`


export const StyledRegister = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 70%;
max-width: 25.9375rem;
min-width: 16.375rem;
height: 709.96px;
max-height: 900px;
min-height: 600px;
background-color: var(--gray-3);
color: var(--gray-0);

form{
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.register_text_container{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
   

}

.register_input_container{
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
   
}

.register_button_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10%;
}

.register_button{
    background-color: var(--gray-1);
    border: var(--gray-1);
}
`;

