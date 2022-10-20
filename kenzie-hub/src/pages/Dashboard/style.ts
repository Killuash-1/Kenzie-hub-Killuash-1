import styled from "styled-components";

export const DivDashBoard = styled.div`
  width: 100vw;
  height: 100vh;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 4rem;
    border-bottom: 2px solid var(--gray-3);
    padding-right: 1rem;
  }

  .div_img_container {
    width: 30%;
    height: 4rem;
    display: flex;
    align-items: center;
    padding-left: 16px;
  }

  .header_button {
    width: 85px;
    background-color: var(--gray-3);
    font-weight: 800;
    border: 1px solid var(--gray-3);
  }
  .user_container{
    border-bottom: 2px solid var(--gray-3); 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .div_user_container {
    
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 8rem;
   
    padding-left: 16px;
    color: var(--gray-0);
  }

  .div_message_container {
    display: flex;
    color: var(--gray-0);
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 1rem;
    width: 99%;
  }

  .div_tech_container {
    display: flex;
    flex-direction: column;
  }

  .div_button_tech {
    width: 2rem;
    height: 2rem;
    background-color: var(--gray-3);
    border: var(--gray-3);
  }

  .div_tech_container {
    width: 100%;
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  main {
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;

    align-items: center;
  }
  ul {
    width: 90%;
    max-width: 640px;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
    padding: 1rem 0;
    border-radius: 0.75rem;
    background-color: var(--gray-2);
    overflow-y: scroll;
    outline:  solid var(--gray-3) ;

  }
  ul::-webkit-scrollbar {
    width: 0.7rem;

    background-color: var(--gray-3);
    border-radius: 0 0.5rem 0.5rem 0;
  }
  ul::-webkit-scrollbar-thumb {
    background-color: var(--gray-1);
    border-radius: 1rem;
    width: 0.3rem;

  }
  span {
    margin-top: 12px;
    font-size: 12px;
    font-weight: 400;
  }
  h2 {
    color: var(--gray-0);
  }

  @media (min-width: 420px) {
    .div_user_container {
      justify-content: center;
    }
  }

  @media (min-width: 768px) {
    nav {
      justify-content: space-around;
      padding: 0;
    }

    .div_img_container{
      width: 35%;
      padding: 0;
    }

    .div_user_container {
      width: 70%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0;
    }

    .div_message_container {
      width: 70%;
      justify-content: space-between;
      padding: 0;
    }
  }
  @media (min-width: 1024px) {
    nav {
      justify-content: space-around;
    }

    .div_img_container {
      width: 35%;
    }

    .div_user_container {
      width: 70%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .div_message_container {
      display: flex;

      justify-content: space-between;
      color: var(--gray-0);
      width: 100vw;
      height: 5rem;
      margin-top: 16px;
      width: 70%;
    }

    p {
      margin-top: 16px;
    }

    ul {
      width: 80%;
      height: 90%;
      /* max-height: 289px; */
    }
    ul::-webkit-scrollbar {
      width: 0.7rem;
      height: 0.5rem;
      background-color: var(--gray-3);
      border-radius: 0 0.5rem 0.5rem 0;
    }
    ul::-webkit-scrollbar-thumb {
      background-color: var(--gray-0);
    }
  }
`;
