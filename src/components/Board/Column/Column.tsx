import React, { useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { useLayout } from '../../../hooks/layout/useLayout';
import { useTasks } from '../../../hooks/tasks/useTasks';
import { ITask } from '../../../models/models';
import Card from './Card/Card';
import css from './Column.module.scss';

interface IColumnProps {
  name: string
  state: string
};

export default function Column({ name, state }: IColumnProps) {
  const [isNewTaskInputShown, setIsNewTaskInputShown] = useState<boolean>(false);
  const [inputCardName, setInputCardName] = useState<string>('');

  const [isNewTaskSelectShown, setIsNewTaskSelectShown] = useState<boolean>(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string>('');

  const { mainContentHeight } = useLayout();

  const { getTasksByState, getTasksByExcludeState, addTask, moveTask, removeTask } = useTasks();

  const tasks = getTasksByState(state);
  const hasTasks = tasks.length > 0;

  const onInputCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCardName(e.target.value)
  };

  return (
    <div className={css.column}>
      <div className={css.header}>{name}</div>
      <div className={css.wrapper}>
        <div className={css.body}>

          {hasTasks &&
            <Scrollbars autoHide autoHeight autoHeightMax={mainContentHeight - 120}>
              {tasks.map((task: ITask) => <Card key={task.id} id={task.id} name={task.name} onRemove={(id) => removeTask(id)} />)}
            </Scrollbars>
          }

          {isNewTaskInputShown &&
            <div>
              <input
                className={css['input-column']}
                onChange={onInputCard}
                value={inputCardName}
                type="text"
                data-testid="column-input"
              />
            </div>
          }

          {isNewTaskSelectShown &&
            <select
              className={css['select-column']}
              data-testid="column-select"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedTaskId(e.target.value)}>

              <option>Select Task</option>
              {getTasksByExcludeState(state).map((task: ITask) =>
                <option key={task.id} value={task.id} data-testid="column-select-option">{task.name}</option>
              )}
            </select>
          }
        </div>

        <div className={css.footer}>
          {(!isNewTaskInputShown && !isNewTaskSelectShown) &&
            <button
              className={css['button-column']}
              data-testid={`${state}-button-add`}
              onClick={() => state === 'backlog' ? setIsNewTaskInputShown(true) : setIsNewTaskSelectShown(true)}
            >+ Add card</button>
          }

          {(isNewTaskInputShown || isNewTaskSelectShown) &&
            <button
              className={css['button-column']}
              data-testid={`${state}-button-submit`}
              onClick={() => {
                if (state === 'backlog') {
                  setIsNewTaskInputShown(false);
                  if (inputCardName && inputCardName.trim() && inputCardName.length <= 44 && inputCardName.length > 0) {
                    addTask(inputCardName);
                  } else {
                    alert('INCORRECT TITLE OF TASK')
                  }
                  setInputCardName('');
                } else {
                  setIsNewTaskSelectShown(false);
                  moveTask(parseInt(selectedTaskId), state);
                }
              }}
            >Submit</button>
          }

          {(isNewTaskInputShown || isNewTaskSelectShown) &&
            <button
              className={css['button-column']}
              onClick={() => state === 'backlog' ? setIsNewTaskInputShown(false) : setIsNewTaskSelectShown(false)}
            >Hide</button>
          }
        </div>
      </div>
    </div >
  )
};
