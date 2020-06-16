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

      {props.fields.map((e, index) => {
        return (
          <div className="info-body" key={index}>
            <span>
              <b>{e.label}</b>
            </span>

            <span>{e.value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SharedInfoCard;
