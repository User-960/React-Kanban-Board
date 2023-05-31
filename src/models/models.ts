export type TTaskContext = {
  states: IState[]
  addTask: (name: string, state: string) => void
};

export interface ITask {
  id: number
  name: string
  state: string
};

export interface IState {
  id: number
  name: string
  state: string
};