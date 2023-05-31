import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '../../../hooks/tasks/useTasks';
import { ITask } from '../../../models/models';
import Button from '../../Shared/buttons/Button';
import { GlobalSvgSelector } from '../../Shared/icons/GlobalSvgSelector';
import css from './Card.module.scss';

export default function CardDetail() {
  const navigate = useNavigate();
  const { getTaskById, updateTask } = useTasks();
  const { id } = useParams<'id'>();
  const [task, setTask] = useState<ITask | any>();

  useEffect(() => {
    if (id) {
      const curTask = getTaskById(parseInt(id))
      setTask(curTask)
    }
  }, [id]);

  const navigateBack = () => navigate(-1);

  return (
    <div className={css.card}>
      {task &&
        <div className={css.body}>
          <textarea
            className={css.name}
            value={task.name}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setTask({
                ...task,
                name: e.target.value
              })
            }}
          />

          <textarea
            className={css.description}
            value={task.description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setTask({
                ...task,
                description: e.target.value
              })
            }}
          />
        </div>
      }

      <Button className={css['button-close']} onClick={navigateBack}>
        <GlobalSvgSelector id='close' />
      </Button>

      <div>
        <button
          className={css['button-save']}
          onClick={() => {
            updateTask(task);
            navigateBack();
          }}>Save Card</button>
      </div>
    </div >
  )
};
