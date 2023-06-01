import React, { useState } from 'react';
import { GlobalSvgSelector } from '../../Shared/icons/GlobalSvgSelector';
import css from './Profile.module.scss';

export default function Profile() {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  return (
    <div className={css['profile']} onClick={() => setIsMenuShown(!isMenuShown)}>
      <div className={css['profile-icon']}>
        <GlobalSvgSelector id="profile" />
      </div>

      <div className={`${css['chevron']} ${isMenuShown ? css['up'] : ''}`}>
        <GlobalSvgSelector id="chevron" />
      </div>

      {isMenuShown &&
        <menu className={css['menu']}>
          <div className={css['menu-item']}>Profile</div>
          <div className={css['menu-item']}>Log Out</div>
        </menu>
      }
    </div>
  )
}
