import { getRandomInt, getRandomElementArr } from './util.js';

const PHOTO_COUNT = 25;

const Likes = { MIN: 15, MAX: 200 };

const Comments = { MIN: 1, MAX: 5 };

const Avatars = { MIN: 1, MAX: 6 };

const Nums = { MIN: 0, MAX: 99 };

let photos = [];

const names = ['Anna', 'Roman', 'Pavel', 'Olesya', 'Diana', 'Gala', 'Roman2', 'Anna2', 'Olesya412', 'Diana777'];

const descriptionPhoto = [
  'С котом',
  'Без кота, но в шляпе',
  'Только коты',
  'Собаки бывают кусачи',
  'Коты и собаки',
  'Собаки тоже воют',
];

const messages = [
  'Всё отлично!',
  'В целом всё хорошо.',
  'Когда вы делаете фотографию, хорошо бы не убирать палец из кадра.',
  'В конце концов это просто профессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография чуть хуже.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня не получилась фотография лучше.',
  'Лица у людей на фотке прелесть.',
  'Как можно было поймать такой удачный момент?!',
];


const addComments = () => {
  const comments = [];

  for (let i = 0; i < getRandomInt(Comments.MIN, Comments.MAX); i++) {
    comments.push({
      id: getRandomInt(Nums.MIN, Nums.MAX),
      avatar: 'img/avatar-' + getRandomInt(Avatars.MIN, Avatars.MAX) + '.svg',
      message: getRandomElementArr(messages),
      name: getRandomElementArr(names),
    });
  }

  return comments;
};


const addPhotos = () => {
  for (let i = 0; i < PHOTO_COUNT; i++) {

    photos.push({
      id: i,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomElementArr(descriptionPhoto),
      likes: getRandomInt(Likes.MIN, Likes.MAX),
      comments: addComments(),
    })
  }
};

addPhotos();


export { photos };
