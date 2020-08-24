import React, { useEffect } from 'react';
import { VariantType, useSnackbar } from 'notistack';
import { createStructuredSelector } from 'reselect';
import { snackbarActions, snackbarSelectors } from '@ppm/data-access/snack-bar';
import './features-snack-bar.scss';
import { useSelector, useDispatch } from 'react-redux';


const stateSelector = createStructuredSelector({
  message: snackbarSelectors.selectMessage(),
  type: snackbarSelectors.selectType()
});

export const FeaturesSnackBar = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { message, type } = useSelector(stateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      snackBarMessage(type, message);
      dispatch(snackbarActions.setMessageSuccess());
    }
  }, [message, type]);

  const snackBarMessage = (variant: VariantType, message: string) => {
    enqueueSnackbar(message, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        }, 
        variant
    });
  };
  return <div></div>
};

export default FeaturesSnackBar;
