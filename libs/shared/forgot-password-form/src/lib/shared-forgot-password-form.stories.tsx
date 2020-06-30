import React from 'react';
import {
  SharedForgotPasswordForm,
  SharedForgotPasswordFormProps,
} from './shared-forgot-password-form';
import { action } from '@storybook/addon-actions';

export default {
  component: SharedForgotPasswordForm,
  title: 'SharedForgotPasswordForm',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedForgotPasswordFormProps = {
    onSendEmail: action('onSendEmail'),
  };

  return <SharedForgotPasswordForm {...props} />;
};

export const backEnd = () => {
  /* eslint-disable-next-line */
  const props: SharedForgotPasswordFormProps = {
    onSendEmail: ({ email }) => {
      let xhr = new XMLHttpRequest();

      xhr.open(
        'GET',
        `http://localhost:3333/api/auth/email/forgot-password/${email}`
      );

      xhr.onload = function () {
        if (xhr.status == 200) {
          let responseMessage = JSON.parse(xhr.response).data.response;
          switch (responseMessage) {
            case 'LOGIN.USER_NOT_FOUND':
              console.log('User not found.');
            case 'RESET_PASSWORD.EMAIL_SENDED_RECENTLY':
              console.log('Email sent recently.');
          }
        } else {
        }
        return;
      };

      xhr.send();
    },
  };

  return <SharedForgotPasswordForm {...props} />;
};
