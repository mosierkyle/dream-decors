import {
  getAllByRole,
  getAllByTestId,
  getByTestId,
  render,
  screen,
} from '@testing-library/react';
import Router from '../Router';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Nav Links work Correctly', () => {
  it('Clicking on logo takes you to the home page', async () => {
    render(<Router />);

    const logo = screen.getByTestId('logo');

    await userEvent.click(logo);

    expect(
      screen.getByText('Where comfort meets creativity')
    ).toBeInTheDocument();
  });

  it('Clicking on living takes you to the living page', async () => {
    render(<Router />);

    const living = screen.getByTestId('living');

    await userEvent.click(living);

    expect(screen.getByText('LIVING ROOM FURNITURE')).toBeInTheDocument();
  });

  it('Clicking on dining takes you to the dining page', async () => {
    render(<Router />);

    const dining = screen.getByTestId('dining');

    await userEvent.click(dining);

    expect(screen.getByText('DINING ROOM FURNITURE')).toBeInTheDocument();
  });

  it('Clicking on bedroom takes you to the bedroom page', async () => {
    render(<Router />);

    const bedroom = screen.getByTestId('bedroom');

    await userEvent.click(bedroom);

    expect(screen.getByText('BEDROOM ROOM FURNITURE')).toBeInTheDocument();
  });

  it('Clicking on search icon loads search component', async () => {
    render(<Router />);

    const search = screen.getByTestId('search');

    await userEvent.click(search);

    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  it('Clicking on cart icon loads cart component', async () => {
    render(<Router />);

    const cart = screen.getByTestId('cart');

    await userEvent.click(cart);

    expect(screen.getByText('Subtotal')).toBeInTheDocument();
  });
});
