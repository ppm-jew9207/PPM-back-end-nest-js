import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import './shared-rank.scss';

export interface SharedRankProps {
  value: number;
  isRanked: boolean;
  onUpdate: (data) => void;
}

export const SharedRank = (props: SharedRankProps) => {
  const [rank, setRank] = useState({
    isRanked: false,
    value: null,
  });

  useEffect(() => {
    setRank({ ...props });
  }, [props]);

  return (
    <div className="rank">
      <Rating
        disabled={rank.isRanked}
        name="hover-feedback"
        value={rank.value}
        precision={0.5}
        onChange={(event: EventTarget, newValue: number) => {
          if (!rank.isRanked) {
            let newRank = { isRanked: true, value: newValue };
            setRank(newRank);
            props.onUpdate(newRank);
          }
        }}
      />
      {!!rank && (
        <Box ml={2} className="rank__summary">
          <span>{rank.value}</span>
        </Box>
      )}
    </div>
  );
};
export default SharedRank;
