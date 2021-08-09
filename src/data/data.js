//web
import hub from '../assets/HUB2.gif';
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
const seven = 'https://youtu.be/966jrmteU14';
const fight = 'https://youtube.com/watch?v=3MNLfBfmoak';
const food = 'https://youtube.com/watch?v=E-TzXNQhYTo';
const blr = 'https://youtu.be/BDDy2psv6bE';
const news = 'https://youtu.be/2IxUQdEdzLA';
const badminton = 'https://youtu.be/7jCtQ6Il1cU';
const test = 'https://youtu.be/UITJSTuqtjs';
const her = 'https://youtu.be/wcHMVOzNykI';
const millions = 'https://youtu.be/xuCCWhpzvig';
const keyIntro = 'https://youtu.be/JGlHa-aFxgc';
const keyOutro = 'https://youtu.be/H6LWh-zcc30';
const tjIntro = 'https://youtu.be/7g-U5sHU4h0';

export const mainData = [
  {
    index: 0, image: hub, title: 'Kolvanta Order Management System', 
    description: 'Created an order management system to keep track of purchased orders from processed to delivered;'
    + ' moving away from Google Sheets. (This system also kept track of orders for Do Good Be Kind for one of their promotions.)', 
    tech: ['MongoDB', 'Express', 'React', 'Node']
  },
  { index: 1, video: news, title: `XYZ Breaking News`, 
    description: '', tech: ['Premiere Pro'] 
  },
  { index: 2, video: seven, title: `7 into 28`, 
    description: 'Short Typography', tech: ['After Effects'] 
  },
];

export const webData = [
  {
    index: 0, image: hub, title: 'Kolvanta Order Management System', 
    description: 'Created an order management system to keep track of purchased orders from processed to delivered;'
    + ' moving away from Google Sheets. (This system also kept track of orders for Do Good Be Kind for one of their promotions.)', 
    tech: ['MongoDB', 'Express', 'React', 'Node']
  },
  {
    index: 1, image: grindinProject, title: "Grindin' Goals!", 
    description: 'A 10-wk individual project, for people to stay motivated as they complete their goals'
    + ' with a Role Playing Game element.',
    tech: ['MongoDB', 'Express', 'React', 'Node']
  },
  {
    index: 2, image: pizzaProject, title: 'Slice Pizzeria', 
    description: 'A team project to make a responsize pizza site following web and mobile wireframes.',
    tech: ['JavaScript']
  },
  {
    index: 3, image: innovationProject, title: 'Neumont Innovation Center', 
    description: 'A team project for a Neumont Staff member. This site is to provide info and events for students'
    +' who want their ideas marketed. We only worked on the front end.',
    tech: ['JavaScript']
  },
  {
    index: 4, image: mazeProject, title: 'AmazING', 
    description: 'A randomized maze that can be played by a bot or player. It looks AmazING upon completion!',
    tech: ['JavaScript']
  },
  {
    index: 5, image: statsProject, title: 'Neumont Prospective Statistics', 
    description: 'A team project learning how to use a local mongoose database.',
    tech: ['JavaScript', 'Express', 'Pug', 'Mongoose']
  },
];

export const graphicData = [
  { index: 0, img: rightguard, proj: `Right Guard Parody`, text: 'yup' },
  { index: 1, img: troots, proj: `Twisted Roots`, text: 'yup' },
  { index: 2, img: smith, proj: `Demon Smith`, text: 'yup' },
  { index: 3, img: surreal1, proj: `Surreal One`, text: 'yup' },
  { index: 4, img: surreal2, proj: `Surreal Two`, text: 'yup' },
  { index: 5, img: amigos, proj: `3 Amigos`, text: 'yup' },
  { index: 6, img: offspring, proj: `The Offspring`, text: 'yup' },
  { index: 7, img: track, proj: `Track Olympics`, text: 'yup' },
];

export const mediaData = [
  { index: 0, video: food, title: `How to: Cook Gourmet Looking Food`, 
    description: `This is an instructional video for my Collaborative and Interpersonal Communication's class.`, tech: ['Windows Movie Maker'] 
  },
  { index: 1, video: fight, title: `Interlude to a Fight`, 
    description: 'Short Video; Directed & Scripted by me.', tech: ['Premiere Pro'] 
  },
  { index: 2, video: blr, title: `Bad Lip Reading`, 
    description: 'Random clips where I insert random voiceovers.', tech: ['Premiere Pro'] 
  },
  { index: 3, video: news, title: `XYZ Breaking News`, 
    description: 'Assignment for class.', tech: ['Premiere Pro'] 
  },
  { index: 4, video: badminton, title: `Badminton Movie Trailer`, 
    description: 'Assignment for class.', tech: ['Premiere Pro', 'After Effects'] 
  },
  { index: 5, video: test, title: `Effects Test`, 
    description: 'Assignment for class.', tech: ['After Effects'] 
  },
  { index: 6, video: her, title: `Forgive Her`, 
    description: 'Kinetic Typogrophy', tech: ['After Effects'] 
  },
  { index: 7, video: seven, title: `7 into 28`, 
    description: 'Short Typography', tech: ['After Effects'] 
  },
  { index: 8, video: millions, title: `AyeKee - Millions`, 
    description: 'Lyric Music Video for a friend.', tech: ['AFter Effects'] 
  },
  { index: 9, video: keyIntro, title: `AyeKee Youtube Intro`, 
    description: 'YouTube Intro', tech: ['AFter Effects'] 
  },
  { index: 10, video: keyOutro, title: `AyeKee Youtube Outro`, 
    description: 'YouTube Intro', tech: ['AFter Effects'] 
  },
  { index: 11, video: tjIntro, title: `Taniya Janae Youtube Intro`, 
    description: 'YouTube Outro', tech: ['AFter Effects'] 
  },
];