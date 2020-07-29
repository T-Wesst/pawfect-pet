import React from 'react';
import placeholder from '../images/placholder.png'

export default function Card(props) {
  const { name, status, published_at, size, age, gender, coat, tags } = props;
  const {
    breeds: { primary },
    attributes: { house_trained, shots_current, spayed_neutered },
    environment: { children, dogs, cats },
    contact: { address, phone, email},
    photos,
    description,
  } = props;
  return (
    <div>
      <h1>{name}</h1>
       {photos.length > 0 && photos[0]['small'] ?
      <img src={photos[0]["small"]} alt={name} /> : <img src={placeholder} alt="placeholder" />
    }
      <ul>
        <li>Status: {status}</li>
        <li>Date Posted: {published_at}</li>
        <li>Size: {size}</li>
        <li>Breed: {primary}</li>
        <li>Spayed/Neutered: {spayed_neutered}</li>
        <li>House Trained: {house_trained ? 'yes': 'no'}</li>
        <li>Shot Currents: {shots_current ? 'yes': 'no'}</li>
        <li>Age: {age}</li>
        <li>Gender: {gender}</li>
        {coat && <li>Coat: {coat}</li>}
        <li>Child Friendly: {children ? 'yes': 'no'}</li>
        <li>Dog Friendly: {dogs ? 'yes': 'no'}</li>
        <li>Cat Friendly: {cats ? 'yes': 'no'}</li>
        <li>Phone: {phone}</li>
        <li>Email: {email}</li>
        <li>City: {address.city}</li>
        <li>State: {address.state}</li>
      </ul>
        {tags.length > 0 && (
      <ul>
        <li>tags: {tags}</li>
      </ul>
        )}
      <p>{description}</p>
    </div>
  );
}
