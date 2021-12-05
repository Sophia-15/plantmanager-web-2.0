import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import React, { useState } from 'react';

import { WelcomeContainer, PlantManagerInfo, UserInfo } from '../styles/pages/welcome';

export default function Welcome() {
  const [username, setUsername] = useState('');
  const router = useRouter()

  function saveNameToCookies() {
    setCookie(undefined, '@plantmanager:user', username);
    router.push('/new')
  }

  return (
    <WelcomeContainer>
      <PlantManagerInfo>
        <h1>Gerencie suas plantas de forma fácil</h1>
        <img src="/ilustra.svg" alt="Ilustração regando as plantas" />
        <p>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </p>
      </PlantManagerInfo>
      <UserInfo>
        <span>🤔</span>
        <p>Como podemos chamar você?</p>
        <input type="text" placeholder="Digite seu nome" onChange={(e) => setUsername(e.target.value)} />
        <button type="button" onClick={saveNameToCookies}>Confirmar</button>
      </UserInfo>

    </WelcomeContainer>
  );
}
