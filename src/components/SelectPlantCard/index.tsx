import React from 'react';

import { SelectedPlantCardContainer } from './styles';

interface SelectPlantCardProps {
  photo: string
  name: string
  onClick?: () => void
}

export function SelectPlantCard({ photo, name, onClick }: SelectPlantCardProps) {
  return (
    <SelectedPlantCardContainer onClick={onClick} type="button">
      <img src={photo} alt={`Planta ${name}`} />
      <span>{name}</span>
    </SelectedPlantCardContainer>
  );
}
