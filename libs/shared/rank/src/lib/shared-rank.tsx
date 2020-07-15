import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import './shared-rank.scss';

export interface SharedRankProps {
  rank: number;
}

export const SharedRank = (props: SharedRankProps) => {
  const [rank, setRank] = React.useState(props.rank);

  return (
    <div className="rank">
      <Rating
        name="hover-feedback"
        value={rank}
        precision={0.5}
        onChange={(event, newRank) => {
          setRank(newRank);
        }}
      />
      {rank !== null && (
        <Box ml={2} className="rank__summary">
          <span>{rank}</span>
        </Box>
      )}
    </div>
  );
};
export default SharedRank;
