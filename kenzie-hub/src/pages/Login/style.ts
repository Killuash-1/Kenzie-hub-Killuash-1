import styled from "styled-components";

export const StyledText = styled.div`
  color: var(--color-primary);
  height: 10%;
`;

export const StyledLogin = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 79%;
  max-width: 25.9375rem;
  min-width: 16.375rem;
  height: 70%;
  max-height: 36.3125rem;
  min-height: 21.75rem;
  border-radius: 0.5rem;
  background-color: var(--gray-3);
  color: var(--gray-0);

  form {
    width: 95%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .login_text_container {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login_input_container {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }

  .login_button_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 35%;
  }

  span {
    font-size: 0.5625rem;
    line-height: 0.875rem;
    font-weight: 600;
    font-style: normal;
    color: var(--gray-1);
  }
  .gray_button_login {
    background-color: var(--gray-1);
    border: var(--gray-1);
  }

  .gray_button_login:hover{
    background-color: var(--gray-0);
    color: var(--gray-4);
  }
`;
