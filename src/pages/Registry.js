// src/pages/Registry.js
import React from 'react';
import './Registry.css';

const registryItems = [
  {
    name: 'KitchenAid Stand Mixer',
    description: 'A versatile stand mixer for all your baking needs.',
    link: 'https://www.example.com/kitchenaid-stand-mixer'
  },
  {
    name: 'Dyson Vacuum Cleaner',
    description: 'A powerful vacuum cleaner for a clean home.',
    link: 'https://www.example.com/dyson-vacuum-cleaner'
  },
  {
    name: 'Le Creuset Dutch Oven',
    description: 'A high-quality Dutch oven for cooking delicious meals.',
    link: 'https://www.example.com/le-creuset-dutch-oven'
  },
  {
    name: 'Nespresso Coffee Machine',
    description: 'A convenient coffee machine for your daily caffeine fix.',
    link: 'https://www.example.com/nespresso-coffee-machine'
  },
  {
    name: 'Bose SoundLink Speaker',
    description: 'A portable speaker with excellent sound quality.',
    link: 'https://www.example.com/bose-soundlink-speaker'
  }
];

function Registry() {
  return (
    <div className="registry">
      <h1>Wedding Registry</h1>

      <div className="store-registries">
        <h2>Click to purchase:</h2>
        <div className="store-registry">
          <iframe
            src="https://www.example.com/store-registry-1"
            title="Store Registry 1"
            width="100%"
            height="400"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="store-registry">
          <iframe
            src="https://www.example.com/store-registry-2"
            title="Store Registry 2"
            width="100%"
            height="400"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Registry;