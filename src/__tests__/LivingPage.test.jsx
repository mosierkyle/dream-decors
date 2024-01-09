import {
  getAllByRole,
  getAllByTestId,
  getByTestId,
  render,
  screen,
} from '@testing-library/react';
import HomePage from '../Routes/HomePage/HomePage';
import Router from '../Router';
import Living from '../Routes/ShopPages/Living/Living';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Rendering Living Page', () => {
  it('Renders Living Page', () => {
    render(
      <MemoryRouter initialEntries={['/living']}>
        <Living />
      </MemoryRouter>
    );

    // Check if elements on the Living Page are rendered
    expect(screen.getByText('LIVING ROOM FURNITURE')).toBeInTheDocument();
    // Add more assertions based on your Living Page content
  });
});
