import styled from 'styled-components';

export const NewPlantContainer = styled.main`
  padding: 3.3125rem 8.6%;

  h2 {
    font-size: 2rem;
    color: ${({theme}) => theme.colors.bodyDark};
    margin-bottom: 2.5rem;
  }

  .choose-plant-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.5rem;
    width: 100%;
  }

  @media (max-width: 927px) {
    .choose-plant-container {
      justify-content: center;
      gap: 2rem;
    }
  }
`


