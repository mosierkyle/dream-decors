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

describe('Search feature functions correctly', () => {
  it('Search comes back with results', async () => {
    render(<Router />);

    const search = screen.getByTestId('search');

    await userEvent.click(search);

    await userEvent.type(screen.getByPlaceholderText('Search'), 'AVANTE');

    expect(screen.getByText('AVANTE series')).toBeInTheDocument();
  });
});

describe('Cart Functions correctly', () => {
  it('item gets added to cart correctly', async () => {
    render(<Router />);

    await userEvent.click(screen.getByText('LIVING'));

    const items = screen.getAllByTestId('item-card');

    await userEvent.click(items[0]);

    await userEvent.click(screen.getByTestId('add'));

    await userEvent.click(screen.getByText('ADD TO CART'));

    await userEvent.click(screen.getByTestId('cart'));

    expect(screen.getByTestId('item-price')).toHaveTextContent(
      '$',
      '14998',
      '.99'
    );
    expect(screen.getByTestId('item-quantity')).toHaveDisplayValue(2);
    expect(screen.getByTestId('cart-length')).toHaveTextContent('(', '1', ')');
    expect(screen.getByTestId('subtotal')).toHaveTextContent(
      '$',
      '14998',
      '.99'
    );
  });

  it('item quantity addition changes correctly', async () => {
    render(<Router />);

    await userEvent.click(screen.getByText('LIVING'));
    const items = screen.getAllByTestId('item-card');
    await userEvent.click(items[0]);
    await userEvent.click(screen.getByTestId('add'));
    await userEvent.click(screen.getByText('ADD TO CART'));
    await userEvent.click(screen.getByTestId('cart'));
    await userEvent.click(screen.getByTestId('item-add'));

    expect(screen.getByTestId('item-quantity')).toHaveDisplayValue(3);
  });

  it('item quantity subtration, changes correctly', async () => {
    render(<Router />);

    await userEvent.click(screen.getByText('LIVING'));
    const items = screen.getAllByTestId('item-card');
    await userEvent.click(items[0]);
    await userEvent.click(screen.getByTestId('add'));
    await userEvent.click(screen.getByText('ADD TO CART'));
    await userEvent.click(screen.getByTestId('cart'));
    await userEvent.click(screen.getByTestId('item-subtract'));
    expect(screen.getByTestId('item-quantity')).toHaveDisplayValue(1);
  });

  it('item quantity goes below zero', async () => {
    render(<Router />);

    await userEvent.click(screen.getByText('LIVING'));
    const items = screen.getAllByTestId('item-card');
    await userEvent.click(items[0]);
    await userEvent.click(screen.getByText('ADD TO CART'));
    await userEvent.click(screen.getByTestId('cart'));
    await userEvent.click(screen.getByTestId('item-subtract'));
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  it('Trash button works', async () => {
    render(<Router />);

    await userEvent.click(screen.getByText('LIVING'));
    const items = screen.getAllByTestId('item-card');
    await userEvent.click(items[0]);
    await userEvent.click(screen.getByTestId('add'));
    await userEvent.click(screen.getByText('ADD TO CART'));
    await userEvent.click(screen.getByTestId('cart'));
    await userEvent.click(screen.getByTestId('item-trash'));

    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });
});
