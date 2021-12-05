import styled from "styled-components";

export const Button = styled.button`
  margin-right: 1.25rem;
  padding: 0.5625rem 1.0625rem;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 3.125rem;
  border-radius: 0.75rem;
  color: ${({theme}) => theme.colors.heading};
  background-color: ${({theme}) => theme.colors.shape};

  &:hover {
    filter: brightness(95%);
  }

  &.active {
    background-color: ${({theme}) => theme.colors.greenLight};
    color: ${({theme}) => theme.colors.heading};
  }
`


