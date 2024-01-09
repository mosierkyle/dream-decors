import {
  getAllByRole,
  getAllByTestId,
  getByTestId,
  render,
  screen,
} from '@testing-library/react';
import HomePage from '../Routes/HomePage/HomePage';
import Router from '../Router';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('HomePage Renders Properly', () => {
  it('Headline text is rendered', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const headingElement = screen.getByText('Where comfort meets creativity');

    expect(headingElement.textContent).toMatch(
      'Where comfort meets creativity'
    );
  });

  it('Featured items are loaded in', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const featuredItems = screen.getAllByTestId('item-card');
    expect(featuredItems.length).toBeGreaterThanOrEqual(1);
  });
});

describe('HomePage buttons are clickable', () => {
  it('Click `SHOP NOW` works properly', async () => {
    render(<Router />);

    const shopNow = screen.getByText('SHOP NOW');

    await userEvent.click(shopNow);

    expect(screen.getByTestId('shop-page-heading')).toBeInTheDocument();
  });

  it('Click on item loads the correct item', async () => {
    render(<Router />);
    const items = screen.getAllByTestId('item-card');

    await userEvent.click(items[0]);

    expect(screen.getByText('AVANTE series')).toBeInTheDocument();
  });
});
