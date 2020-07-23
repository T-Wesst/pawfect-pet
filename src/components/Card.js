import React from 'react';

export default function Card(props) {
  const { name, status, published_at, size, age, gender, coat, tags } = props;
  const { breeds, attributes, environment, contact, description } = props;
  return (
    <div>
      <h1>{name}</h1>
      <img src={props.photos[0]['small']} alt={`${name}`} />
      <ul>
        <li>Status: {status}</li>
        <li>Date Posted: {published_at}</li>
        <li>Size: {size}</li>
        <li>Breed: {breeds.primary}</li>
        <li>Spayed/Neutered: {attributes.spayed_neutered}</li>
        <li>House Trained: {attributes.house_trained}</li>
        <li>Shot Currents: {attributes.shots_current}</li>
        <li>Age: {age}</li>
        <li>Gender: {gender}</li>
        <li>Coat: {coat}</li>
        <li>Environment children: {environment.children}</li>
        <li>Environment dogs: {environment.dogs}</li>
        <li>Environment cats: {environment.cats}</li>
        <li>Phone: {contact.phone}</li>
        <li>Email: {contact.email}</li>
        <li>City: {contact.address.city}</li>
        <li>State: {contact.address.state}</li>
      </ul>
      <ul>
        <li>tags: {tags}</li>
      </ul>
      <p>{description}</p>
    </div>
  );
}
