import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { VscGithubInverted } from 'react-icons/vsc'

import { WelcomeContainer, PlantManagerInfo, UserInfo } from '../styles/pages/welcome';
import { GetServerSideProps } from 'next';

export default function Welcome() {
  const router = useRouter()

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
        <p>Opa, ainda não conhecemos você!</p>
        <button 
          type="button"
          onClick={() => signIn('github')}
        >
          Entrar com o Github
          <VscGithubInverted />
        </button>
      </UserInfo>

    <ToastContainer />
    </WelcomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  console.log(session?.user)

  if (session) {
    return {
      redirect: {
        destination: '/new', 
        permanent: false
      }
    }
  }
  
  return {
    props: {}
  }
}