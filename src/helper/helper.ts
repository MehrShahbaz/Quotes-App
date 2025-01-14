import { Store } from 'react-notifications-component';

type ShowNotificationProps = {
  title: string;
  type: 'success' | 'danger' | 'info' | 'default' | 'warning';
  message: string;
  duration?: number;
};

type ErrorType = {
  error: string;
  exception: string;
  status: number;
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
export const errorNotification = (err: any, duration?: number): void => {
  if (err.response) {
    const data: ErrorType = err.response.data;

    showNotification({
      title: data.error || 'Error',
      type: 'danger',
      message: data.exception || 'Error',
      duration,
    });
  } else {
    throw err;
  }
};
