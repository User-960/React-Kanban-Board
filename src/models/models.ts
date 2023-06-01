export type TTaskContext = {
  states: IState[]
  addTask: (name: string) => void
  updateTask: (item: ITask) => void
  removeTask: (id: number) => void
  getTaskById: (id: number) => void
  getTasksByState: (state: string) => any
  getTasksByExcludeState: (state: string) => any
  moveTask: (id: number, state: string) => void
  getActiveTaskCount: () => void
  getFinishedTaskCount: () => void
};

export interface ITask {
  id: number
  name: string
  state: string
  description?: string
};

export interface IState {
  id: number
  name: string
  state: string
};