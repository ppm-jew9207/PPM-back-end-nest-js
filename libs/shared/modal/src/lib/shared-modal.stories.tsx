import React from 'react';
import { SharedModal } from './shared-modal';

export default {
  component: SharedModal,
  title: 'SharedModal',
};

export const primary = () => {
  return <SharedModal title="Test" text="Test 2" />;
};
