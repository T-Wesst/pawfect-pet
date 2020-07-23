import React from 'react';
import Card from './Card';

export default function Cards({ animals }) {
  return (
    <div>
      {animals.map((animal) => (
        <Card key={animal.id} {...animal} />
      ))}
    </div>
  );
}
