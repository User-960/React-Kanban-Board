import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../../App';
import { ITask } from '../../../models/models';

describe('column tests', () => {
  it('adding tasks in backlog section', () => {
    render(<App />);

    const addButton = screen.getByTestId('backlog-button-add');
    fireEvent.click(addButton);

    const columnInput = screen.getByTestId('column-input');
    fireEvent.change(columnInput, { target: { value: 'Go for a walk' } });

    const submitButton = screen.getByTestId('backlog-button-submit');
    fireEvent.click(submitButton);

    const expectedTask: ITask = {
      id: 1,
      name: 'Go for a walk',
      state: 'backlog'
    };

    expect(expectedTask.name).toBe('Go for a walk');
  });

  it('adding tasks in ready section', () => {
    render(<App />);

    const addButton = screen.getByTestId('ready-button-add');
    fireEvent.click(addButton);

    const columnSelect = screen.getByTestId('column-select');
    fireEvent.click(columnSelect);

    const columnSelectOption = screen.getByTestId('column-select-option');
    fireEvent.click(columnSelectOption);

    const submitButton = screen.getByTestId('ready-button-submit');
    fireEvent.click(submitButton);

    const expectedTaskBacklog = {
      backlog: [
        {
          id: 1,
          name: 'Go for a walk',
          state: 'backlog',
          description: ""
        }
      ],
      inProgress: [],
      ready: [],
      finished: []
    };

    const expectedTaskReady = {
      backlog: [],
      inProgress: [],
      ready: [
        {
          id: 1,
          name: 'Go for a walk',
          state: 'backlog',
          description: ""
        }
      ],
      finished: []
    };

    expect(expectedTaskBacklog.backlog[0].name).toBe(expectedTaskReady.ready[0].name);
  });

  it('should be correct submit event depends on filled input', () => {
    render(<App />);

    const addTask = jest.fn();

    const addButton = screen.getByTestId('backlog-button-add');
    fireEvent.click(addButton);

    const columnInput = screen.getByTestId('column-input');
    fireEvent.change(columnInput, { target: { value: '' } });

    const submitButton = screen.getByTestId('backlog-button-submit');
    expect(submitButton).toBeDisabled();
    fireEvent.click(submitButton);

    expect(addTask).not.toHaveBeenCalled();
  });
});