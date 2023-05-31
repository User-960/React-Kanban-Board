import {createContext} from 'react';
import {TTaskContext} from '../../models/models';

const defaultValue: TTaskContext = {
  states: [],
  addTask: () => {}
};

export const TaskContext = createContext<TTaskContext>(defaultValue);