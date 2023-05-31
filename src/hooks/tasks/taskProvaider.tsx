import { useState } from "react";
import { ITask, IState } from "../../models/models";
import { TaskContext } from "./taskContext";

interface ITaskProvaiderProps {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode
};

export const TaskProvaider = ({ children }: ITaskProvaiderProps) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [states] = useState<IState[]>([
    { id: 1, name: 'backlog', state: 'backlog' },
    { id: 2, name: 'in progress', state: 'in progress' },
    { id: 3, name: 'ready', state: 'ready' },
    { id: 4, name: 'finished', state: 'finished' }
  ]);

  const findById = (id: string) => tasks.find((task) => task.id === parseInt(id));

  const context = {
    states,
    addTask: (name: string, state: string) => {
      const task: ITask = {
        id: tasks.length + 1,
        name,
        state
      };

      setTasks([...tasks, task]);
    }
  };

  return <TaskContext.Provider value={context}>{children}</TaskContext.Provider>
};
