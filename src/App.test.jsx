import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from './App';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

describe('App', () => {
  it('renders headline', async () => {
    render(<App />);
    await userEvent.click(screen.getByTestId('count-btn'));
    expect(screen.getByTestId('count-btn')).toHaveTextContent('count is 1')
    // screen.debug();
  });
});