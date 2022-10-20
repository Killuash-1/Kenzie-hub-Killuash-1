import styled from "styled-components";

export const DivModal = styled.div`
  width: 90%;
  min-width: 16.8125rem;
  max-width: 28.5625rem;
  height: 40%;
  min-height: 15.125rem;
  max-height: 27.625rem;
  background-color: var(--gray-3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2rem;

  .header_modal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--gray-0);
    background-color: var(--gray-2);
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .header_modal_button {
    background-color: transparent;
    border: none;
    height: 2.5rem;
    width: 2.5rem;
  }

  .form_modal {
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: var(--gray-0);
  }
`;
