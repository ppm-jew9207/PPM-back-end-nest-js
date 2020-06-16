import React from 'react';

import './shared-info-card.scss';

export enum FieldTypes {
  Test = 1,
}

export interface SharedInfoCardProps {
  title?: string;
  fields?: {
    type?: FieldTypes;
    label?: string;
    value?: string;
  }[];
}

export const SharedInfoCard = (props: SharedInfoCardProps) => {
  return (
    <div className="info-card-container">
      <div className="info-header">
        <h2>{props.title}</h2>
      </div>

      <div className="info-body">
        {props.fields.map((e, index) => {
          return (
            <div key={index}>
              <p>{e.label}</p>
              <p>{e.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SharedInfoCard;
