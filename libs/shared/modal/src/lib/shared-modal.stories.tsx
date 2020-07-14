import React from 'react';
import { SharedModal, SharedModalProps } from './shared-modal';

export default {
  component: SharedModal,
  title: 'SharedModal',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedModalProps = {};

  return <SharedModal />;
};
