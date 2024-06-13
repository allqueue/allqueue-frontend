import React from 'react';
import './Topbar.css';
import allqueueLogo from "#/allqueueLogo.svg"
import loginIcon from "#/icons/login.svg"
import Image from 'next/image';
import { Select } from '../select/Select';


interface TopbarProps {
  changeGame: () => void,
  move: () => void,
  login: () => void,
  logout: () => void,
}

export const Topbar = ({
}) => {
  return (
    <header>
      <section>
        <Image
          src={allqueueLogo}
          alt="allqueueLogo"
        />
        <p>ALL QUEUE</p>
      </section>

      <section>
        <Select
          label="test"
          name="ts"
          options={[
            {
              label: '리그오브레전드',
              value: 'lol'
            },
            {
              label: '오버워치',
              value: 'overwatch'
            }
          ]}
        />
        <Image
          className="pl-4"
          height="20"
          src={loginIcon}
          alt="loginIcon"
        />
      </section>
    </header>
  );
};
