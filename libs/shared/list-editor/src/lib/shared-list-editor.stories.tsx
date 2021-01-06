import React from 'react';
import { SharedListEditor, SharedListEditorProps } from './shared-list-editor';

export default {
  component: SharedListEditor,
  title: 'SharedListEditor',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedListEditorProps = {};

  return <SharedListEditor />;
};
