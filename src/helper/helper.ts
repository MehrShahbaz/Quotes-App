import { Store } from 'react-notifications-component';

type ShowNotificationProps = {
  title: string;
  type: 'success' | 'danger' | 'info' | 'default' | 'warning';
  message: string;
  duration?: number;
};

type ShowErrorProps = {
  message: string;
};

export const showNotification = ({ title, type, message, duration }: ShowNotificationProps): void => {
  Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: duration ?? 2000,
      onScreen: true,
    },
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorNotification = ({ message }: ShowErrorProps): void => {
  showNotification({
    title: 'Error',
    type: 'danger',
    message: message,
    duration: 2000,
  });
};
