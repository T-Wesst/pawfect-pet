import React from 'react';

export default function Card(props) {
  const { name, status, published_at, size, age, gender, coat, tags } = props;
  const {
    breeds: { primary, secondary, tertiary, mixed },
    attributes: { house_trained, shots_current, spayed_neutered },
    environment: { children, dogs, cats },
    contact: { address: { city, state }, phone, email},
    photos,
    description,
  } = props;
  return (
    <div>
      <h1>{name}</h1>
      <img src={photos[0]['small']} alt={`${name}`} />
      <ul>
        <li>Status: {status}</li>
        <li>Date Posted: {published_at}</li>
        <li>Size: {size}</li>
        <li>Breed: {(primary, secondary, tertiary, mixed)}</li>
        <li>Spayed/Neutered: {spayed_neutered}</li>
        <li>House Trained: {house_trained}</li>
        <li>Shot Currents: {shots_current}</li>
        <li>Age: {age}</li>
        <li>Gender: {gender}</li>
        <li>Coat: {coat}</li>
        <li>Environment children: {children}</li>
        <li>Environment dogs: {dogs}</li>
        <li>Environment cats: {cats}</li>
        <li>Phone: {phone}</li>
        <li>Email: {email}</li>
        <li>City: {city}</li>
        <li>State: {state}</li>
      </ul>
      <ul>
        <li>tags: {tags}</li>
      </ul>
      <p>{description}</p>
    </div>
  );
}
