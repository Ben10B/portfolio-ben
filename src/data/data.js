//web
import hub from '../assets/HUB2.gif';
import nad1 from '../assets/NAD1.gif';
import hylyte from '../assets/Hylyte.gif';
import pizzaProject from '../assets/Slice Pizzeria.png';
import innovationProject from '../assets/InnovationLab.png';
import mazeProject from '../assets/AmazING.png';
import statsProject from '../assets/Neu Stats.png';
import grindinProject from "../assets/Grindin'.png";
//graphic
import smith from '../assets/Demon Smith 2.jpg';
import surreal2 from '../assets/Surreal Two.jpg';
import surreal1 from '../assets/Surreal One.jpg';
import amigos from '../assets/3 Amigos.jpg';
import offspring from '../assets/The Offspring.jpg';
import track from '../assets/Track Olympics.jpg';
import troots from '../assets/Asset 2.png';
// import balabe from '../assets/Asset 1.png';
import rightguard from '../assets/Right Guard Parody.jpg';
//media
const seven = 'https://youtube.com/watch?v=966jrmteU14';
const fight = 'https://youtube.com/watch?v=3MNLfBfmoak';
const food = 'https://youtube.com/watch?v=E-TzXNQhYTo';
const blr = 'https://youtube.com/watch?v=BDDy2psv6bE';
const news = 'https://youtube.com/watch?v=2IxUQdEdzLA';
const badminton = 'https://youtube.com/watch?v=7jCtQ6Il1cU';
const test = 'https://youtube.com/watch?v=UITJSTuqtjs';
const her = 'https://youtube.com/watch?v=wcHMVOzNykI';
const millions = 'https://youtube.com/watch?v=xuCCWhpzvig';
const keyIntro = 'https://youtube.com/watch?v=JGlHa-aFxgc';
const keyOutro = 'https://youtube.com/watch?v=H6LWh-zcc30';
const tjIntro = 'https://youtube.com/watch?v=7g-U5sHU4h0';

export const mainData = [
  {
    index: 0, image: hub, title: 'Kolvanta Order Management System', type: 'web',
    description: 'Created an order management system to keep track of purchased orders from processed to delivered;'
    + " moving away from Google Sheets. Kept track of orders for Ariix, and one of Do Good Be Kind's promotions.", 
    tech: ['MongoDB', 'Express', 'React', 'Node']
  },
  {
    index: 1, image: hylyte, title: 'Hylyte', type: 'web',
    description: 'Created a Shopify site to display locations of water machines throughout the U.S. and reserve locations'
    + ' for companies to advertise their products. Working in collaboration with WaterStation.', 
    tech: ['Shopify Liquid', 'JavaScript', 'Map.js']
  },
  {
    index: 2, video: 'https://youtu.be/151YhyaIvNw', title: 'Scholar Athlete of the Week - 2014', type: 'other',
    description: "I found the article the original video was linked to, but the article and video was removed (https://www.facebook.com/WMBBTV/posts/10152027673646658), for it's 6 years old!"
    + " Luckily I've found my recording of it.", 
    tech: ['Marching Band', 'Football', 'Track', '3.96 GPA']
  },
  {
    index: 3, image: nad1, title: 'NewAge Diamonds', type: 'web',
    description: 'Migrated React website to Shopify platform and redesigned theme to include custom features for Ariix (now renamed as NewAge).'
    + ' As a result, traffic and sales increased.', 
    tech: ['Shopify Liquid', 'JavaScript', 'Express', 'Node']
  },
  { index: 4, video: seven, title: `7 into 28`, type: 'media',
    description: 'Short Typography', tech: ['After Effects'] 
  },
  {
    index: 5, video: 'https://youtu.be/A1ays9EpjC4', title: 'GokuNarutovsSasukeIchigo Sprite Battle - Part One', type: 'other',
    description: "This video was suppose to be a remake of an older version made in Windows Movie Maker, but I added on to it changing the plot, so it's different. I know there are minor errors in the video, so bear with it please."
    + " I kinda wrapped the ending up so that I can make a fresh video with my new skills. Enjoy=)", 
    tech: ['Macromedia Flash 8', 'Macromedia Fireworks 8']
  }
];

export const webData = [
  {
    index: 0, image: hub, title: 'Kolvanta Order Management System', type: 'web', 
    description: 'Created an order management system to keep track of purchased orders from processed to delivered;'
    + ' moving away from Google Sheets. (This system also kept track of orders for Do Good Be Kind for one of their promotions.)', 
    tech: ['MongoDB', 'Express', 'React', 'Node']
  },
  {
    index: 1, image: hylyte, title: 'Hylyte', type: 'web',
    description: 'Created a Shopify site to display locations of water machines throughout the U.S. and reserve locations'
    + ' for companies to advertise their products. Working in collaboration with WaterStation.', 
    tech: ['Shopify Liquid', 'JavaScript', 'Map.js']
  },
  {
    index: 2, image: nad1, title: 'NewAge Diamonds', type: 'web', 
    description: 'Migrated React website to Shopify platform and redesigned theme to include custom features for Ariix (now renamed as NewAge).'
    + ' As a result, traffic and sales increased.', 
    tech: ['Shopify Liquid', 'JavaScript', 'Express', 'Node']
  },
  {
    index: 3, image: grindinProject, title: "Grindin' Goals!", type: 'web', 
    description: 'A 10-wk individual project, for people to stay motivated as they complete their goals'
    + ' with a Role Playing Game element.',
    tech: ['MongoDB', 'Express', 'React', 'Node']
  },
  {
    index: 4, image: pizzaProject, title: 'Slice Pizzeria', type: 'web', 
    description: 'A team project to make a responsize pizza site following web and mobile wireframes.',
    tech: ['JavaScript']
  },
  {
    index: 5, image: innovationProject, title: 'Neumont Innovation Center', type: 'web', 
    description: 'A team project for a Neumont Staff member. This site is to provide info and events for students'
    +' who want their ideas marketed. We only worked on the front end.',
    tech: ['JavaScript']
  },
  {
    index: 6, image: mazeProject, title: 'AmazING', type: 'web', 
    description: 'A randomized maze that can be played by a bot or player. It looks AmazING upon completion!',
    tech: ['JavaScript']
  },
  {
    index: 7, image: statsProject, title: 'Neumont Prospective Statistics', type: 'web', 
    description: 'A team project learning how to use a local mongoose database.',
    tech: ['JavaScript', 'Express', 'Pug', 'Mongoose']
  },
];

export const graphicData = [
  { index: 0, img: rightguard, proj: `Right Guard Parody`, text: 'yup', type: 'graphic' },
  { index: 1, img: troots, proj: `Twisted Roots`, text: 'yup', type: 'graphic' },
  { index: 2, img: smith, proj: `Demon Smith`, text: 'yup', type: 'graphic' },
  { index: 3, img: surreal1, proj: `Surreal One`, text: 'yup', type: 'graphic' },
  { index: 4, img: surreal2, proj: `Surreal Two`, text: 'yup', type: 'graphic' },
  { index: 5, img: amigos, proj: `3 Amigos`, text: 'yup', type: 'graphic' },
  { index: 6, img: offspring, proj: `The Offspring`, text: 'yup', type: 'graphic' },
  { index: 7, img: track, proj: `Track Olympics`, text: 'yup', type: 'graphic' },
];

export const mediaData = [
  { index: 0, video: food, title: `How to: Cook Gourmet Looking Food`, type: 'media', 
    description: `This is an instructional video for my Collaborative and Interpersonal Communication's class.`, tech: ['Windows Movie Maker'] 
  },
  { index: 1, video: fight, title: `Interlude to a Fight`, type: 'media',
    description: 'Short Video; Directed & Scripted by me.', tech: ['Premiere Pro'] 
  },
  { index: 2, video: blr, title: `Bad Lip Reading`, type: 'media',
    description: 'Random clips where I insert random voiceovers.', tech: ['Premiere Pro'] 
  },
  { index: 3, video: news, title: `XYZ Breaking News`, type: 'media',
    description: 'Assignment for class.', tech: ['Premiere Pro'] 
  },
  { index: 4, video: badminton, title: `Badminton Movie Trailer`, type: 'media',
    description: 'Assignment for class.', tech: ['Premiere Pro', 'After Effects'] 
  },
  { index: 5, video: test, title: `Effects Test`, type: 'media',
    description: 'Assignment for class.', tech: ['After Effects'] 
  },
  { index: 6, video: her, title: `Forgive Her`, type: 'media',
    description: 'Kinetic Typogrophy', tech: ['After Effects'] 
  },
  { index: 7, video: seven, title: `7 into 28`, type: 'media',
    description: 'Short Typography', tech: ['After Effects'] 
  },
  { index: 8, video: millions, title: `AyeKee - Millions`, type: 'media',
    description: 'Lyric Music Video for a friend.', tech: ['AFter Effects'] 
  },
  { index: 9, video: keyIntro, title: `AyeKee Youtube Intro`, type: 'media',
    description: 'YouTube Intro', tech: ['AFter Effects'] 
  },
  { index: 10, video: keyOutro, title: `AyeKee Youtube Outro`, type: 'media',
    description: 'YouTube Intro', tech: ['AFter Effects'] 
  },
  { index: 11, video: tjIntro, title: `Taniya Janae Youtube Intro`, type: 'media',
    description: 'YouTube Outro', tech: ['AFter Effects'] 
  },
];

export const otherData = [
  {
    index: 0, video: 'https://youtu.be/151YhyaIvNw', title: 'Scholar Athlete of the Week - 2014', type: 'other',
    description: "I found the article the original video was linked to, but the article and video was removed (https://www.facebook.com/WMBBTV/posts/10152027673646658), for it's 6 years old!"
    + " Luckily I've found my recording of it.", 
    tech: ['Marching Band', 'Football', 'Track', '3.96 GPA']
  },
  {
    index: 1, video: 'https://youtu.be/A1ays9EpjC4', title: 'GokuNarutovsSasukeIchigo Sprite Battle - Part One', type: 'other',
    description: "This video was suppose to be a remake of an older version made in Windows Movie Maker, but I added on to it changing the plot, so it's different. I know there are minor errors in the video, so bear with it please."
    + " I kinda wrapped the ending up so that I can make a fresh video with my new skills. Enjoy=)", 
    tech: ['Macromedia Flash 8', 'Macromedia Fireworks 8']
  },
]