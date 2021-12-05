import styled from 'styled-components';

export const MyPlantsContainer = styled.main`
  padding: 3.3125rem 8.6%;

  .to-water {
    display: flex;
    align-items: center;
    padding: 2.25rem 1.5rem;
    width: auto;
    background: linear-gradient(${({theme}) => theme.colors.blueGradient});
    border-radius: 20px;

    p {
      margin-left: 1.75rem;
      font-size: 2rem;
      color: ${({theme}) => theme.colors.blue};
    }
  }

  .water-next {
    h2 {
      margin: 3.3125rem 0 1.0625rem 0;
      font-size: 24px;
      color: ${({theme}) => theme.colors.heading};
    }
  }

  .plants-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 2.5rem;
  }

  .empty-plants-container {
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    span {
      font-size: 10rem;
    }

    p {
      font-size: 24px;
      color: ${({theme}) => theme.colors.bodyDark};
      text-align: center;
    }
  }
`;

export const Plant = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    background-color: ${({theme}) => theme.colors.shape};
    padding: 1.5rem;
    border-radius: 20px;

    button {
      background-color: transparent;
    }

    .trashcan {
      font-size: 24px;
      color: ${({theme}) => theme.colors.red};
      transition: 0.2s ease-in;

      &:hover {
        transform: translateY(-7px);
      }
    }

    img {
      height: 5rem;
    }

    .plant-info {
      display: flex;
      align-items: center;
      gap: 1.25rem;

      p {
        font-size: 17px;
        color: ${({theme}) => theme.colors.bodyDark};
        font-weight: 500;
      }
    }

    .when-to-water {
      font-size: 15px;

      p {
        color: ${({theme}) => theme.colors.bodyLight};
      }

      span {
        color: ${({theme}) => theme.colors.bodyDark};
        font-weight: 500;
      }
    }
`;