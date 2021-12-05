import styled, { keyframes } from 'styled-components';

const showMenu = keyframes`
  0% {
  visibility: hidden;
  transform: translateX(-100%);
  }
  100% {
    display: block;
    transform: translateX(0);

  }
`;

export const HeaderContainer = styled.header`
  height: 80px;
  padding: .875rem 8.6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme}) => theme.colors.greenLight};
  width: 100%;

  nav {
    display: flex;
    align-items: center;
  }

  img {
    width: 17.25rem;
    height: 2.8125rem;
  }

  button {
    display: none;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 3.75rem;
    font-size: 20px;

    li {
      cursor: pointer;
      color: ${({theme}) => theme.colors.bodyDark};
    }
  }

  .userContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.green};
    border-radius: 50%;
    padding: 2px;

    margin-left: 1rem;

    img {
      border: 2px solid ${({theme}) => theme.colors.background};
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
    }
  }

  .logoutButton {
    display: block;
    background-color: transparent;
    transition: filter .2s;
    margin-top: 2%;
    margin-left: 1rem;

    svg {
      color: ${({theme}) => theme.colors.green};
      font-size: 1.5rem;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 867px) {
    button {
      display: flex;
      padding: .5rem 1rem;
      font-size: 1rem;
      background: none;
    }

    
    .hamburguer {
      color: ${({theme}) => theme.colors.green};
      display: block;
      width: 20px;
      border-top: 2px solid;

      &::after, &::before {
        content: '';
        display: block;
        width: 20px;
        height: 2px;
        background-color: currentColor;
        margin-top: 4px;
        transition: .3s;
        position: relative;
      }

      &.active {
        border-top-color: transparent;

        &::before {
          transform: rotate(135deg);
        }
        
        &::after {
          transform: rotate(-135deg);
          top: -.6rem;
        }
      }
    }

    ul {
      display: block;
      position: absolute;
      width: 0;
      top: 80px;
      left: 0px;
      height: calc(100vh - 80px);
      background: ${({theme}) => theme.colors.shape};
      transition: 0.6s;
      z-index: 1000;
      visibility: hidden;
      overflow-x: hidden;

      li {
        margin: 2rem 3rem;
        color: ${({theme}) => theme.colors.bodyDark};
        font-size: 24px;
        white-space: nowrap;
      }
    }

    ul.active {
      width: 100%;
      visibility: visible;
    }
  }
`;
