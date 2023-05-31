import {createContext} from 'react';
import { TTaskContext } from '../../models/models';

const defaultValue: TTaskContext = {
  states: [],
  addTask: () => {},
  updateTask: () => {},
  removeTask: () => {},
  getTaskById: () => {},
  getTasksByState: () => {},
  getTasksByExcludeState: () => {},
  moveTask: () => {},
  getActiveTaskCount: () => {},
  getFinishedTaskCount: () => {}
};

export const TaskContext = createContext<TTaskContext>(defaultValue);