import React, { useState, useCallback, useMemo } from 'react';
import { FaHome, FaRocket, FaBars } from "react-icons/fa";

import {useClickOutsideListenerRef} from '../../hooks/window'

import Item from './Item';
import { Wrapper, Container, BarsIcon, Content  } from './styles';

const Sidebar: React.FC = () => {
  const [barsHover, setBarsHover] = useState(false);
  const [barsClicked, setBarsClicked] = useState(false);

  const handleBarsClick = useCallback(() => {
    setBarsClicked(true);
  }, []);

  const handleOutsideBarsClick = useCallback(() => {
    setBarsClicked(false);
  }, []);

  const handleMouseBarsEnter = useCallback(() => {
    setBarsHover(true);
  }, []);

  const handleMouseBarsLeave = useCallback(() => {
    setBarsHover(false);
  }, []);

  const barsRef = useClickOutsideListenerRef(handleOutsideBarsClick);

  const completeSidebar = useMemo(() => {
    return barsHover || barsClicked;
  }, [barsClicked, barsHover])

  return (
    <Wrapper>
      <BarsIcon
        ref={barsRef}
        onMouseEnter={handleMouseBarsEnter}
        onMouseLeave={handleMouseBarsLeave}
        onClick={handleBarsClick}
      >
        <FaBars />
      </BarsIcon>

      <Container completeSidebar={completeSidebar}>
        <Content>
          <Item name='Home' completeSidebar={completeSidebar} icon={FaHome} to='/home' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' completeSidebar={completeSidebar} icon={FaRocket} to='/rocket' />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Sidebar;
