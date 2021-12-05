import styled from "styled-components";

export const SelectedPlantCardContainer = styled.button`
  background-color: ${({theme}) => theme.colors.shape};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 47px;
  width: 10.875rem;
  border-radius: 1.25rem;
  text-align: center;
  border: 2px solid ${({theme}) => theme.colors.shape};
  transition: border .2s;

  img {
    height: 6.25rem;
    margin-bottom: 12px;
  }

  span {
    font-size: 18px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.heading};
  }

  &:hover {
    border: 2px solid ${({theme}) => theme.colors.green};
  }

  @media (max-width: 867px) {
    .select-plant {
      width: 20rem;
    }
  }

  @media (max-width: 466px) {
    .select-plant {
      width: 100%;
    }
  }

`