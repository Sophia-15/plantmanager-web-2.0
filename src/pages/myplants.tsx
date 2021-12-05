import React, { useState } from 'react';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import { FiTrash } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from '../components/Header';

import { Modal } from '../components/Modal';
import { GetServerSideProps } from 'next';
import { parseCookies, setCookie } from 'nookies';

import { MyPlantsContainer, Plant } from '../styles/pages/myplants'
import Head from 'next/head';
import { getSession, useSession } from 'next-auth/react';

type Plant = {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
  timeNotification: string
}

interface SavedPlantLocalStorageProps {
  [id: string]: {
    data: Plant
  }
}

interface MyPlantsProps {
  plantsSorted?: Plant[]
  nextWateredPlant?: string
}


export default function MyPlants({ nextWateredPlant, plantsSorted }: MyPlantsProps) {
  const [plants, setPlants] = useState<Plant[]>(plantsSorted);
  const [showModal, setShowModal] = useState(false);
  const [modalPlant, setModalPlant] = useState<Plant>();
  const { data: session } = useSession()

  function handleRemovePlant(deletedPlant: Plant | undefined) {
    if (deletedPlant) {
      try {
        const removedPlant = plants.filter((plant) => deletedPlant.id !== plant.id);
        const { '@plantmanager:plants': plantsRaw } = parseCookies()
        const allPlants = plantsRaw ? (JSON.parse(plantsRaw) as SavedPlantLocalStorageProps) : {};
        delete allPlants[deletedPlant.id];

        setCookie(undefined, '@plantmanager:plants', JSON.stringify(allPlants));
        setPlants(removedPlant);
        toast.success('Planta removida com sucesso!');
        setShowModal(!showModal);
      } catch (error) {
        toast.error('Houve um erro excluindo a planta');
      }
    }
  }

  function toggleModal(plant: Plant) {
    setShowModal(!showModal);
    setModalPlant(plant);
  }

  return (
    <>
      <Head>
        <title>My Plants | PlantManager</title>
      </Head>

      <Header />
      <MyPlantsContainer>
        <div className="to-water">
          <img src="/drop.svg" alt="Ícone de gota" />
          <p>{plants.length === 0 ? 'Cadastre sua planta e você saberá quando rega-la' : nextWateredPlant}</p>
        </div>
        <div className="water-next">
          <h2>
            Plantinhas de
            {' '}
            {session?.user?.name}
          </h2>
          <div className="plants-container">
            {plants.length > 0 ? plants.map((plant) => (
              <Plant type="button" className="plant" key={plant.id}>
                <div className="plant-info">
                  <img src={plant.photo} alt="Foto da planta" />
                  <p>{plant.name}</p>
                </div>
                <div className="when-to-water">
                  <p>Regar ás</p>
                  <span>{plant.timeNotification}</span>
                </div>
                <button type="button" onClick={() => toggleModal(plant)}>
                  <FiTrash
                    className="trashcan"
                  />
                </button>
              </Plant>

            )) : (
              <div className="empty-plants-container">
                <span>🥰</span>
                <p>
                  Que tal começar a cadastrar
                  suas plantinhas?
                </p>
              </div>
            ) }

          </div>
        </div>
      </MyPlantsContainer>
      {showModal && (
      <Modal
        plant={modalPlant}
        showModal={showModal}
        setShowModal={setShowModal}
        handleRemovePlant={handleRemovePlant}
      />
      )}
      <ToastContainer
        style={{ fontSize: '17px' }}
      />
    </>
  );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { '@plantmanager:plants': plantsRaw } = parseCookies(ctx)
  const allPlants = plantsRaw ? (JSON.parse(plantsRaw) as SavedPlantLocalStorageProps) : {};
  const today = new Date();

  const plantsSorted = Object
    .keys(allPlants)
    .map((plant) => allPlants[plant].data)
    .sort((a, b) => Math.floor(
      new Date(`${today.toDateString()} ${a.timeNotification}`).getTime() / 1000
              - Math.floor(new Date(`${today.toDateString()} ${b.timeNotification}`).getTime() / 1000),
    ));

  if (!plantsSorted[0]) {
    return;
  }


  const nextWateredTime = formatDistance(
    new Date(`${today.toDateString()} ${plantsSorted[0].timeNotification}`).getTime(),
    new Date().getTime(),
    { locale: pt },
  );

  const nextWateredPlant = `Regue sua ${plantsSorted[0].name} daqui a ${nextWateredTime}`

  const session = await getSession(ctx)
  console.log(session?.user)

  if (!session) {
    return {
      redirect: {
        destination: '/', 
        permanent: false
      }
    }
  }

  return {
    props: {
      plantsSorted,
      nextWateredPlant
    }
  }
}