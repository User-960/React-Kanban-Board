import React, { useState } from 'react';
import { GlobalSvgSelector } from '../../Shared/icons/GlobalSvgSelector';

export default function Profile() {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  return (
    <div onClick={() => setIsMenuShown(!isMenuShown)}>
      <GlobalSvgSelector id="profile" />
      <div>
        <GlobalSvgSelector id="chevron" />
      </div>

      {isMenuShown &&
        <div>
          <div>Profile</div>
          <div>Log Out</div>
        </div>
      }
    </div>
  )
}
