import React, { useEffect, useState } from 'react';
import Router from 'next/router';

import { GetStaticProps } from 'next';
import { api } from '../services/api';
import { Header } from '../components/Header';
import { EnvironmentButton } from '../components/EnvironmentButton';
import { SelectPlantCard } from '../components/SelectPlantCard';
import { NewPlantContainer } from '../styles/pages/new';
import Head from 'next/head';

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantProps {
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
}

interface NewPlantProps {
  environments: EnvironmentProps[];
  plants: PlantProps[];
}

export default function NewPlant({
  environments,
  plants,
}: NewPlantProps) {
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [selectedEnvironment, setSelectedEnvironment] = useState('all');

  useEffect(() => {
    setFilteredPlants(plants)
  }, [])

  function handleSelectedEnvironment(environment: string) {
    setSelectedEnvironment(environment);

    if (environment === 'all') {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter((plant) =>
      plant.environments.includes(environment),
    );

    return setFilteredPlants(filtered);
  }

  function handlePlantSelected(id: string) {
    Router.push(`/plant/${id}`);
  }

  return (
    <>
      <Header />
      <Head>
        <title>
          New Plant | PlantManager
        </title>
      </Head>
      <NewPlantContainer>
        <h2>Em qual ambiente você quer colocar sua planta?</h2>
        <div className="enviroment-container">
          {environments.map((environment) => (
            <EnvironmentButton
              key={String(environment.key)}
              title={environment.title}
              isActive={environment.key === selectedEnvironment}
              onClick={() => handleSelectedEnvironment(environment.key)}
            />
          ))}
        </div>

        <div className="choose-plant-container">
          {filteredPlants.map((plant) => (
            <SelectPlantCard
              photo={plant.photo}
              name={plant.name}
              key={String(plant.id)}
              onClick={() => handlePlantSelected(plant.id)}
            />
          ))}
        </div>
      </NewPlantContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: plantEnvironments } = await api.get<EnvironmentProps[]>('/plants_environments');

  const { data } = await api.get<PlantProps>('/plants');

  const plants = data;

  const environments = [
    {
      key: 'all',
      title: 'Todos',
    },
    ...plantEnvironments,
  ];

  return {
    props: {
      environments,
      plants,
    },
  };
};

