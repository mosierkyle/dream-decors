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
