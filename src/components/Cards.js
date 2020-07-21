import React from 'react';
import Card from './Card';

export default function Cards({ data: { animals } }) {
  return (
    <div>
      {animals.map((animal) => (
        <Card
          key={animal.id}
          name={animal.name}
          image={animal.photos[0]['small']}
          status={animal.status}
          date-posted={animal.published_at}
          size={animal.size}
          breed={animal.breeds.primary}
          condition={animal.attributes.spayed_neutered}
          house-trained={animal.attributes.house_trained}
          shot={animal.attributes.shots_current}
          age={animal.age}
          gender={animal.gender}
          coat={animal.coat}
          childFriendly={animal.environment.children}
          dogFriendly={animal.environment.dogs}
          catFriendly={animal.environment.cats}
          phone={animal.contact.phone}
          email={animal.contact.email}
          city={animal.contact.address.city}
          state={animal.contact.address.state}
          tags={animal.tags}
          description={animal.description}
        />
      ))}
    </div>
  );
}
