import {
  getAllByRole,
  getAllByTestId,
  getByTestId,
  getByText,
  render,
  screen,
} from '@testing-library/react';
import Router from '../Router';
import Bedroom from '../Routes/ShopPages/Bedroom/Bedroom';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Root from '../Routes/Root/Root';

describe('Rendered cards properly', () => {
  it('Cards were loaded in', () => {
    render(
      <MemoryRouter>
        <Bedroom />
      </MemoryRouter>
    );
    const items = screen.getAllByTestId('item-card');

    expect(items[0]).toBeInTheDocument();
  });

  it('Cards are clickable', async () => {
    render(
      <MemoryRouter>
        <Bedroom />
      </MemoryRouter>
    );
    const items = screen.getAllByTestId('item-card');
    await userEvent.click(items[0]);
    expect(screen.getByText('KIKI series')).toBeInTheDocument();
  });
});

describe('Rendered Breadcrumbs properly', () => {
  it('BreadCrumbs were loaded in', () => {
    render(
      <MemoryRouter>
        <Bedroom />
      </MemoryRouter>
    );

    const breadCrumbs = screen.getByTestId('bread-crumb');
    expect(breadCrumbs).toBeInTheDocument();
  });

  it('BreadCrumbs work properly', async () => {
    render(<Router />);
    const bedroom = screen.getByText('BEDROOM');

    await userEvent.click(bedroom);

    const breadCrumb = screen.getByText('Products');

    await userEvent.click(breadCrumb);

    expect(screen.getByTestId('shop-page-heading')).toBeInTheDocument();
  });
});

describe('Rendered the Sort feature properly', () => {
  it('Sort was loaded in', () => {
    render(
      <MemoryRouter>
        <Bedroom />
      </MemoryRouter>
    );

    const sort = screen.getByText('Sort By:');
    expect(sort).toBeInTheDocument();
  });

  it('Sort works properly', async () => {
    render(
      <MemoryRouter>
        <Bedroom />
      </MemoryRouter>
    );

    const dropdown = screen.getByTestId('sort');

    await userEvent.click(dropdown);

    const byPrice = screen.getByText('Low-High');

    await userEvent.click(byPrice);

    const items = screen.getAllByTestId('item-card');
    await userEvent.click(items[0]);
    expect(screen.getByText('KIKI series')).toBeInTheDocument();
  });
});
