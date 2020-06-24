import React, { useState, useCallback, useMemo } from 'react';
import { FaHome, FaRocket, FaBars } from "react-icons/fa";

import { useClickOutsideListenerRef, useWindowSize } from '../../hooks/window'

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
  const [width] = useWindowSize();

  const sidebarOpen = useMemo(() => {
    return barsHover || barsClicked || width >= 768;
  }, [barsClicked, barsHover, width])

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

      <Container sidebarOpen={sidebarOpen}>
        <Content>
          <Item name='Home' sidebarOpen={sidebarOpen} icon={FaHome} to='/home' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' sidebarOpen={sidebarOpen} icon={FaRocket} to='/rocket' />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Sidebar;
