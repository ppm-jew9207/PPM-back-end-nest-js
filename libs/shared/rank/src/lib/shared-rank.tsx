import React, { useState, useEffect, ChangeEvent } from 'react';
import { Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import './shared-rank.scss';

export interface SharedRank {
  isRanked: boolean;
  value: number;
}
export interface SharedRankProps {
  value: number;
  isRanked: boolean;
  onUpdate: (data: SharedRank) => void;
}

export const SharedRank = (props: SharedRankProps) => {
  const [rank, setRank] = useState({
    isRanked: false,
    value: 0,
  });

  useEffect(() => {
    setRank({ ...props });
  }, [props]);

  const handleChange = (event: ChangeEvent, newValue: number) => {
    if (!rank.isRanked) {
      const newRank = {
        isRanked: true,
        value: !!newValue ? newValue : rank.value,
      };
      setRank(newRank);
      props.onUpdate(newRank);
    }
  };

  return (
    <div className="rank">
      <Rating
        disabled={rank.isRanked}
        name="hover-feedback"
        value={rank.value}
        precision={0.5}
        onChange={handleChange}
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
