import React from 'react';

import { Button } from './styles';

interface EnvironmentButtonProps {
  title: string
  isActive?: boolean
  onClick: () => void
}

export function EnvironmentButton({ title, isActive = false, onClick }: EnvironmentButtonProps) {
  return (
    <Button type="button" className={isActive ? 'environment-button active' : 'environment-button'} onClick={onClick}>{title}</Button>
  );
}
