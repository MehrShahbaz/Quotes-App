import '@testing-library/jest-dom';
import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;

beforeEach(() => {
  jest.spyOn(console, 'warn').mockImplementation((message) => {
    if (!message.includes('React Router Future Flag Warning')) {
      console.warn(message);
    }
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});
