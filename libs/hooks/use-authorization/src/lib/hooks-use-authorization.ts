import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { authorizationSelectors, authorizationActions } from '@ppm/data-access/authorization';
import { ResetPasswordPayload } from '@ppm/common/main';
export interface Login {
  email: string;
  password: string;
}

const stateSelector = createStructuredSelector({
  isLoggedIn: authorizationSelectors.selectIsLogged(),
  loading: authorizationSelectors.selectLoading(),
  step: authorizationSelectors.selectStep(),
  loadingStep: authorizationSelectors.selectStepLoading(),
});

export function useAuthorization(){
  const dispatch = useDispatch();
  const { isLoggedIn, loading, step, loadingStep } = useSelector(stateSelector);

  const logIn = (data: Login) => {
    dispatch(authorizationActions.logIn(data));
  };

  const forgotPassword = (email: string) => {
    dispatch(authorizationActions.forgotPassword(email));
  };

  const forgotPasswordReset = (data: ResetPasswordPayload) => {
    dispatch(authorizationActions.forgotChangePassword(data));
  };

  const forgotPasswordStepUp = (nextStep: number) => {
    dispatch(authorizationActions.forgotPasswordSuccess(nextStep));
  };

  const forgotPasswordStepDown = () => {
    dispatch(authorizationActions.forgotPasswordSuccess(step-1));
  };

  const logOut = () => {
    dispatch(authorizationActions.logOut());
  };

  return {isLoggedIn, logIn, logOut, loading, forgotPassword, step, loadingStep, forgotPasswordStepUp, forgotPasswordStepDown, forgotPasswordReset}
}