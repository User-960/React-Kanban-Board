import { useEffect, useState } from "react";
import { ITask, IState } from "../../models/models";
import { TaskContext } from "./taskContext";

interface ITaskProvaiderProps {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode
};

export const TaskProvaider = ({ children }: ITaskProvaiderProps) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [idCounter, setIdCounter] = useState<number>(0);

  const [states] = useState<IState[]>([
    { id: 1, name: 'backlog', state: 'backlog' },
    { id: 2, name: 'in progress', state: 'inProgress' },
    { id: 3, name: 'ready', state: 'ready' },
    { id: 4, name: 'finished', state: 'finished' }
  ]);

  const findById = (id: number) => tasks.find((task) => task.id === id);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      setTasks(JSON.parse(tasks))
    }
    setIsLoaded(true);
  }, []);

  const context = {
    states,
    addTask: (name: string, state: string) => {
      const id = idCounter + 1
      const task: ITask = {
        id,
        name,
        state: 'backlog'
      };

      setIdCounter(id);
      setTasks([...tasks, task]);
    },
    updateTask: (item: ITask) => {
      const task = findById(item.id);
      if (task) {
        task.name = item.name;
        task.description = item.description;
        setTasks([...tasks]);
      }
    },
    removeTask: (id: number) => {
      const task = findById(id);
      if (task) {
        setTasks([...tasks.filter(item => item.id !== task.id)]);
      }
    },
    getTaskById: findById,
    getTasksByState: (state: string) => {
      return tasks.filter(task => task.state === state);
    },
    getTasksByExcludeState: (state: string) => {
      return tasks.filter(task => task.state !== state);
    },
    moveTask: (id: number, state: string) => {
      const task = findById(id);
      if (task) {
        task.state = state;
      }
      setTasks([...tasks]);
    },
    getActiveTaskCount: () => tasks.filter(task => task.state === 'inProgress' || task.state === 'ready').length,
    getFinishedTaskCount: () => tasks.filter(task => task.state === 'finished').length
  };

  return <TaskContext.Provider value={context}>{children}</TaskContext.Provider>
};
