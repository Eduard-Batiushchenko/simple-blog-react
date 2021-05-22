import { error, success } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { defaults } from '@pnotify/core';

defaults.delay = 2000;

export function postSuccessMessage(message: string): void {
  success({
    text: message,
  });
}

export function postErrorMessage(message: string): void {
  error({
    text: message,
  });
}
