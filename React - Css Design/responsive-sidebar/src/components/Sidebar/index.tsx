import React from 'react';
import { FaHome, FaRocket } from "react-icons/fa";

import Item from './Item';
import { Wrapper, BarsIcon, Content  } from './styles';

const Sidebar: React.FC = () => {

  return (
    <Wrapper>
      <BarsIcon />

      <Content>
        <Item name='Home' icon={FaHome} to='/home' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
        <Item name='Rocket' icon={FaRocket} to='/rocket' />
      </Content>
    </Wrapper>
  )
}

export default Sidebar;
