import styled from 'styled-components';

export const WelcomeContainer = styled.main`
  display: flex;
  height: 100vh;
`;

export const PlantManagerInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  h1 {
    font-size: 2rem;
    width: 18rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.heading};
  }

  img {
    margin: 5rem;
    height: 25rem;
  }

  p {
    font-size: 1.0625rem;
    text-align: center;
    width: 17.9rem;
    line-height: 1.5625rem;
    color: ${({ theme }) => theme.colors.bodyDark};
  }

  @media (max-width: 970px) {
    display: none;
  }
`;

export const UserInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};

  span {
    font-size: 36px;
  }

  p {
    font-size: 27.2px;
    width: 13rem;
    text-align: center;
    font-weight: 600;
    margin: 1.5rem 0 2.5rem 0;
    color:${({ theme }) => theme.colors.heading};
  }

  input {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.shape};
    text-align: center;
    width: 16.4375rem;
    font-size: 17px;

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.colors.green};
    }
  }

  button {
    margin-top: 2.5rem;
    background-color: ${({ theme }) => theme.colors.green};
    padding: 1rem 4.875rem;
    font-size: 17px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    border-radius: 1rem;
    transition: transform 0.5s;

    display: flex;
    align-items: center;
    
    svg {
      margin-left: .3rem;
      font-size: 1.5rem;
    }

    &:hover {
      transform: translateY(-10px);
    }
  }
`;
