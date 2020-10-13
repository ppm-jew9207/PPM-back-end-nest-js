import React from 'react';
import { SharedAdvertDetails } from '@ppm/shared/advert-details';
import { SharedAdvertInfo } from '@ppm/shared/advert-info';
import { SharedLessonsAccordion } from '@ppm/shared/lessons-accordion';
import './features-advert-page.scss';

/* eslint-disable-next-line */
export interface FeaturesAdvertPageProps {}

let learnItems = ['Javascript', 'React', 'Nx', 'NestJS'];
let preRequisites = 'Anglu ir Lietuviu kalbos';
let title = 'React + Nest.js Project';
let description =
  'Norite dirbti, bet neuždirbti? Jei taip, tuomet šis skelbimas kaip tik Jums! Vergovė vedama patyrusio lektoriaus Donato Kuskio išmokins Jus, kad naudojant NX norisi keiktis. Manote, kad TypeScript tai tikra palaima? Prisijungę prie projekto pamatyse, jog gyvenime taip stipriai dar neklydote. Gyvenimo prasmės netekimas ir motyvacijos praradimas garantuotas!';
let creator = 'Donatas Kuskys';
let image =
  'https://c402277.ssl.cf1.rackcdn.com/photos/14875/images/magazine_hero/Medium_WW248926.jpg?1513623521';
let categories = [
  { title: 'Programming', value: 'prog' },
  { title: 'Javascript', value: 'js' },
  { title: 'React', value: 'react' },
  { title: 'Web Development', value: 'web' },
];
let onGetStartedClick = () => {
  alert('paspaudei');
};
let lessons = [
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
  {
    title: 'Gecko',
    authorName: 'Donatas',
    image: 'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
  },
];

let lessonsDescription =
  'Are you ready to find out what all the hype is about with ReactJS? These ReactJS for beginners tutorials will bring you completely up to speed on the hottest JavaScript framework used on the web today.';

export const FeaturesAdvertPage = (props: FeaturesAdvertPageProps) => {
  return (
    <div>
      <SharedAdvertInfo
        title={title}
        description={description}
        creator={creator}
        image={image}
        categories={categories}
        onGetStartedClick={onGetStartedClick}
      />
      <SharedAdvertDetails
        learnItems={learnItems}
        preRequisites={preRequisites}
      />
      <SharedLessonsAccordion
        lessonsDescription={lessonsDescription}
        lessons={lessons}
      />
    </div>
  );
};

export default FeaturesAdvertPage;
