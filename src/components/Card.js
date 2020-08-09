import React from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import placeholder from '../images/placeholder.png';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PetsIcon from '@material-ui/icons/Pets';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import CheckIcon from '@material-ui/icons/Check';
import HomeIcon from '@material-ui/icons/Home';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function Animal(props) {
  const { name, status, published_at, size, age, gender, coat, tags } = props;
  const {
    breeds,
    attributes: { house_trained, shots_current, spayed_neutered },
    environment: { children, dogs, cats },
    contact: { address, phone, email },
    photos,
    description,
  } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Card raised="true" elevation="1">
        <CardHeader
          title={name}
          subheader={`${name} is a ${age} ${breeds.primary} ${gender} and is ${status}!
          ${published_at}`}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <PetsIcon />
            </Avatar>
          }
        />
        <CardMedia
          image={
            photos.length > 0 && photos[0]['small']
              ? photos[0]['small']
              : placeholder
          }
        />
        <CardContent>
          <li>size: {size}</li>
          <li>
            Child Friendly:
            {children ? <ChildFriendlyIcon /> : <NotInterestedIcon />}
          </li>
          <li>
            House Trained:{' '}
            {house_trained ? <HomeIcon /> : <NotInterestedIcon />}
          </li>
          <li>
            Shot Currents:{' '}
            {shots_current ? <LocalHospitalIcon /> : <NotInterestedIcon />}
          </li>
          <li>Dog Friendly: {dogs ? <CheckIcon /> : <NotInterestedIcon />}</li>
          <li>Cat Friendly: {cats ? <CheckIcon /> : <NotInterestedIcon />}</li>
          <ul>
            <li>Spayed/Neutered: {spayed_neutered}</li>
            {coat && <li>Coat: {coat}</li>}
          </ul>
          <Typography color="textSecondary">{description}</Typography>
          <Paper component="ul" className={classes.root}>
            {tags.map((tag) => {
              return (
                <li>
                  <Chip label={tag} className={classes.chip} />
                </li>
              );
            })}
          </Paper>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
            <li>Email: {email}</li>
          </IconButton>
          <IconButton>
            <CallIcon />
            <li>Phone: {phone}</li>
          </IconButton>
          <IconButton>
            <LocationOnIcon />
            <li>City: {address.city}</li>
            <li>State: {address.state}</li>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
