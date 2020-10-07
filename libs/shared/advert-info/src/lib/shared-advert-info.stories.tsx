import { text } from '@storybook/addon-knobs';
import React from 'react';
import { SharedAdvertInfo, SharedAdvertInfoProps } from './shared-advert-info';

export default {
  component: SharedAdvertInfo,
  title: 'SharedAdvertInfo',
};

export const primary = () => {
  const props: SharedAdvertInfoProps = {
    title: text('title', 'React + Nest.js Project'),
    description: text(
      'description',
      'Norite dirbti, bet neuždirbti? Jei taip, tuomet šis skelbimas kaip tik Jums! Vergovė vedama patyrusio lektoriaus Donato Kuskio išmokins Jus, kad naudojant NX norisi keiktis. Manote, kad TypeScript tai tikra palaima? Prisijungę prie projekto pamatyse, jog gyvenime taip stipriai dar neklydote. Gyvenimo prasmės netekimas ir motyvacijos praradimas garantuotas!'
    ),
    creator: text('creator', 'Donatas Kuskys'),
    image: text(
      'image',
      'https://c402277.ssl.cf1.rackcdn.com/photos/14875/images/magazine_hero/Medium_WW248926.jpg?1513623521'
    ),
    categories: [
      { title: 'Programming', value: 'prog' },
      { title: 'Javascript', value: 'js' },
      { title: 'React', value: 'react' },
      { title: 'Web Development', value: 'web' },
    ],
    onGetStartedClick: () => {
      alert('paspaudei');
    },
  };

  return (
    <SharedAdvertInfo
      title={props.title}
      description={props.description}
      creator={props.creator}
      image={props.image}
      categories={props.categories}
      onGetStartedClick={props.onGetStartedClick}
    />
  );
};
