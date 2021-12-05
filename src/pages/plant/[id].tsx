import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { parseCookies, setCookie } from 'nookies';

import { PlantContainer } from './plant';

import { api } from '../../services/api';
import router from 'next/router';

interface SavePlantProps {
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

interface SavePlantLocalStorageProps {
  [id: string]: {
    data: SavePlantProps
  }
}

interface PlantPageProps {
  plant: SavePlantProps[]
}

export default function SavePlant({ plant }: PlantPageProps) {
  const [timeNotification, setTimeNotification] = useState('');

  function savePlantOnCookies(plant: SavePlantProps) {
    const { '@plantmanager:plants': plants } = parseCookies();
    const newPlant = {
      [plant.id]: {
        data: {
          ...plant,
          timeNotification
        },

      }
    }

    const oldPlants = plants ? (JSON.parse(plants) as SavePlantLocalStorageProps) : {};

    setCookie(undefined, '@plantmanager:plants', JSON.stringify({ ...oldPlants, ...newPlant }), { 
      path: '/'
    })

    router.push('/myplants')
  }

  return (
    <>
      {plant.map((plantInfo) => (
        <>
      <Head>
        <title>
          {plantInfo.name} | PlantManager
        </title>
      </Head>

      <PlantContainer>
        <section className="selected-plant-info">
          <img src={plantInfo.photo} alt={`Planta ${plantInfo.name}`} />
          <span>{plantInfo.name}</span>
          <p>
            {plantInfo.about}
          </p>
        </section>

        <section className="selected-plant-config">
          <div className="water-card">
            <img src="/drop.svg" alt="Gota d'água" />
            <p>{plantInfo.water_tips}</p>
          </div>

          <div className="remember-to-water">
            <p>Ecolha o melhor horário para ser lembrado:</p>
            <input
              type="time"
              onChange={(e) => setTimeNotification(e.target.value)}
            />
            <button 
              type="button" 
              onClick={() => savePlantOnCookies(plantInfo)}
            >
              Cadastrar Planta
              </button>
          </div>
        </section>
      </PlantContainer>

        </>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params
  const { data } = await api.get<SavePlantProps[]>(`plants/${id}`);

  const plant = [data]


  return {
    props: {
      plant,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});