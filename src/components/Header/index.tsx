import React, { useContext, useState } from 'react';

import Link from 'next/link';
import { HeaderContainer } from './styles';
import { CustomThemeContext } from '../../contexts/themeContext';
import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';

export function Header() {
  const [active, setActive] = useState(false);
  const { toggleTheme } = useContext(CustomThemeContext)
  const { colors, title } = useContext(ThemeContext)

  function toggleMenu() {
    setActive(!active);
  }

  return (
    <HeaderContainer>
      <img src="/logo.svg" alt="Logo Plant Manager" />
      <nav>
        <button type="button" onClick={() => toggleMenu()}>
          <span className={active ? 'hamburguer active' : 'hamburguer'} />
        </button>
        <ul className={active ? 'active' : ''}>
          <Link href="/myplants">
            <li>Minhas plantinhas</li>
          </Link>
          <Link href="/new">
            <li>Nova planta</li>
          </Link>
          <li>
            <Switch
              onChange={toggleTheme}
              checked={title === 'light'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              onColor={colors.blue}
              offColor={colors.green}
              offHandleColor={colors.green}
              onHandleColor={colors.blue}
            />
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
