import React from 'react';

export default function Card(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image} alt={`${props.name}`} />
      <ul>
        <li>Status: {props.status}</li>
        <li>Date Posted: {props.published_at}</li>
        <li>Size: {props.size}</li>
        <li>Breed: {props.breed}</li>
        <li>Spayed/Neutered: {props.condition}</li>
        <li>House Trained: {props.house_trained}</li>
        <li>Shot Currents: {props.shots_current}</li>
        <li>Age: {props.age}</li>
        <li>Gender: {props.gender}</li>
        <li>Coat: {props.coat}</li>
        <li>Environment children: {props.childFriendly}</li>
        <li>Environment dogs: {props.dogFriendly}</li>
        <li>Environment cats: {props.catFriendly}</li>
        <li>Phone: {props.phone}</li>
        <li>Email: {props.email}</li>
        <li>City: {props.city}</li>
        <li>State: {props.state}</li>
      </ul>
      <ul>
        <li>tags: {props.tags}</li>
      </ul>
      <p>{props.description}</p>
    </div>
  );
}
