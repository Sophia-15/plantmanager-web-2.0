import styled from "styled-components";

export const Overlay = styled.div`

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 1;
  visibility: visible;

  z-index: 999;
`;

export const ModalContent = styled.div`
  background: ${({theme}) => theme.colors.background};
  padding: 2.4rem;
  border-radius: 1.25rem;

  position: relative;
  z-index: 1;

  text-align: center;

  p {
    font-size: 18px;
    color: ${({theme}) => theme.colors.heading};
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    button {
      font-size: 18px;
      padding: 0.75rem 1.5625rem;
      background: ${({theme}) => theme.colors.shape};
      border-radius: 0.75rem;

      &:first-child {
        color: ${({theme}) => theme.colors.heading};
      }

      &:last-child {
        color: ${({theme}) => theme.colors.red};
      }

      &:hover {
        filter: brightness(95%);
      }
    }
  }

  @media (max-width: 867px) {
    .plant {
      width: 100%;
    }
  }
`;