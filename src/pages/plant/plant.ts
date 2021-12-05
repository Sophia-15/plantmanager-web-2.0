import styled from "styled-components";

export const PlantContainer = styled.main`
  display: flex;
  height: 100vh;

.selected-plant-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  background-color: ${({theme}) => theme.colors.shape};

  span {
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-size: 26px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.heading};
  }

  p {
    font-size: 18px;
    color: ${({theme}) => theme.colors.bodyDark};
    width: 20rem;
    text-align: center;
  }

}

.selected-plant-config {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  .water-card {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    width: 23.125rem;
    background: linear-gradient(${({theme}) => theme.colors.blueGradient});
    border-radius: 20px;

      p {
        margin-left: 1.75rem;
        font-size: 1.0625rem;
        color: ${({theme}) => theme.colors.blue};
      }
  }

  .remember-to-water {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 23.125rem;

    p {
      font-size: 1.0625rem;
      margin: 3.5625rem 0 1.25rem 0;
      color: ${({theme}) => theme.colors.bodyDark};
    }

    input {
      width: 19.4375rem;
      padding: 0.75rem;
      margin-bottom: 3.4375rem;
      text-align: center;
      border-radius: .625rem;
      background-color: ${({theme}) => theme.colors.shape};
      border: none;
      color: ${({theme}) => theme.colors.bodyDark};

      &::-webkit-calendar-picker-indicator {
        filter: invert(${({theme}) => theme.colors.invert});
      }
    }

    button {
      padding: 1.0625rem 5.9375rem;
      font-size: 1.25rem;
      font-weight: 500;
      color: ${({theme}) => theme.colors.shape};
      background-color: ${({theme}) => theme.colors.green};
      border-radius: 1.25rem;
      transition: transform .5s;

      &:hover {
        transform: translateY(-10px);
      }
    }
  }
}

/*MEDIA QUERIES*/

@media (max-width: 910px) {
  flex-direction: column;

  .selected-plant-config {
    margin-top: -70px;
  }
}

@media (max-width: 760px) {
  .selected-plant-config {

    .water-card  {
      width: 30rem;
      p {
        font-size: 17px;
      }
    }
    
    .remember-to-water {
      width: 30rem;
      p {
        font-size: 16px;
      }
    }
  } 
}

@media (max-width: 630px) {
  .selected-plant-config {
    .remember-to-water {
      input {
        width: 25rem;
      }

      button {
        font-size: 16px;
      }
    }
  } 
}


@media (max-width: 550px) {
  .selected-plant-info {
    flex: 0.8;

    p {
      width: 40rem;
    }
  }

  .selected-plant-config {
    .water-card  {
      width: 36rem;
      p {
        font-size: 17px;
      }
    }

    .remember-to-water {
      p {
        text-align: center;
        white-space: nowrap;
      }

      input {
        margin-top: 10px;
        width: 25rem;
      }

      button {
        font-size: 16px;
      }
    }
  } 
}
`;


