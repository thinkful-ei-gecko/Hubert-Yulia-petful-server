const Queue = require('./queue');
const pets = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-facebook_social.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'https://www.theaussiezone.com/uploads/2/8/9/3/28935085/published/img-2841.jpeg?1536112062',
    imageDescription: 'An adult corgi standing on green grass.',
    name: 'Lucy',
    sex: 'Female',
    age: 4,
    breed: 'Corgi',
    story: 'Found on the street'
  },
  {
    imageURL:'https://www.coolcattreehouse.com/wp-content/uploads/2016/06/Siamese-Cat-Breed.jpg', 
    imageDescription: 'Brown Siamese cat lounging on the ground.',
    name: 'Daisy',
    sex: 'Female',
    age: 2,
    breed: 'Siamese',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/B22F/production/_90551654_gettyimages-511711526.jpg',
    imageDescription: 'Brown English bulldog with white markings.',
    name: 'Max',
    sex: 'Male',
    age: 6,
    breed: 'English Bulldog',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://www.ctvsh.com/sites/default/files/styles/large/adaptive-image/public/cocker-spaniel-dog-breed-info.jpg?itok=-5xg92pH',
    imageDescription: 'Brown Cocker Spaniel.',
    name: 'Cooper',
    sex: 'Male',
    age: 3,
    breed: 'Cocker Spaniel',
    story: 'Owner passed away'
  },];

const petStore = new Queue();

function populate() {
  for (let i=0; i<pets.length; i++) {
    petStore.enqueue(pets[i]);
  }
}

populate();

module.exports = petStore;