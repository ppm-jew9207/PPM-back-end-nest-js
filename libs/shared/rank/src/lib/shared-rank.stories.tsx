import React from 'react';
import { SharedRank, SharedRankProps } from './shared-rank';

export default {
  component: SharedRank,
  title: 'SharedRank',
};

export const primary = () => {
  const props: SharedRankProps = { rank: 2 };

  return <SharedRank {...props} />;
};
