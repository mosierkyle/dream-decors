import {
  getAllByRole,
  getAllByTestId,
  getByTestId,
  getByText,
  render,
  screen,
} from '@testing-library/react';
import Router from '../Router';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Root from '../Routes/Root/Root';
import Living from '../Routes/ShopPages/Living/Living';

describe('Rendered cards properly', () => {
  it('Cards were loaded in', () => {
    render(
      <MemoryRouter>
        <Living />
      </MemoryRouter>
    );
    const items = screen.getAllByTestId('item-card');

    expect(items[0]).toBeInTheDocument();
  });

  it('Cards are clickable', async () => {
    render(
      <MemoryRouter>
        <Living />
      </MemoryRouter>
    );
    const items = screen.getAllByTestId('item-card');
    await userEvent.click(items[0]);
    expect(screen.getByText('AVANTE series')).toBeInTheDocument();
  });
});

describe('Rendered Breadcrumbs properly', () => {
  it('BreadCrumbs were loaded in', () => {
    render(
      <MemoryRouter>
        <Living />
      </MemoryRouter>
    );

    const breadCrumbs = screen.getByTestId('bread-crumb');
    expect(breadCrumbs).toBeInTheDocument();
  });

  it('BreadCrumbs work properly', async () => {
    render(<Router />);
    const living = screen.getByText('LIVING');

    await userEvent.click(living);

    const breadCrumb = screen.getByText('Products');

    await userEvent.click(breadCrumb);

    expect(screen.getByTestId('shop-page-heading')).toBeInTheDocument();
  });
});

describe('Rendered the Sort feature properly', () => {
  it('Sort was loaded in', () => {
    render(
      <MemoryRouter>
        <Living />
      </MemoryRouter>
    );

    const sort = screen.getByText('Sort By:');
    expect(sort).toBeInTheDocument();
  });

  it('Sort works properly', async () => {
    render(
      <MemoryRouter>
        <Living />
      </MemoryRouter>
    );

    const dropdown = screen.getByTestId('sort');

    await userEvent.click(dropdown);

    const byPrice = screen.getByText('Low-High');

    await userEvent.click(byPrice);

    const items = screen.getAllByTestId('item-card');
    await userEvent.click(items[0]);
    expect(screen.getByText('DRIFTWOOD series')).toBeInTheDocument();
  });
});
