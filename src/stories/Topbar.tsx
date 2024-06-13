import React from 'react';
import './Topbar.css';
import allqueueLogo from "../../public/allqueueLogo.svg"
import loginIcon from "../../public/icons/login.svg"
import Image from 'next/image';


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
        <select name="games" id="game" className='mr-2'>
          <option value="lol">리그오브레전드</option>
          <option value="lol">오버워치</option>
        </select>
        <Image
          height="20"
          src={loginIcon}
          alt="loginIcon"
        />
      </section>
    </header>
  );
};
