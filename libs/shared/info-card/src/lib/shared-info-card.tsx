import React from 'react';

import './shared-info-card.scss';

export enum FieldTypes {}

export interface SharedInfoCardProps {
  title: string;
  fields: {
    type?: FieldTypes;
    label: string;
    value: string;
  }[];
}

export const SharedInfoCard = (props: SharedInfoCardProps) => {
  return (
    <div className="info-card-container">
      <div className="info-header">
        <h2>{props.title}</h2>
      </div>

      {props.fields.map((fields, index) => {
        return (
          <div className="info-body" key={index}>
            <span>
              <b>{fields.label}</b>
            </span>

            <span>{fields.value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SharedInfoCard;
