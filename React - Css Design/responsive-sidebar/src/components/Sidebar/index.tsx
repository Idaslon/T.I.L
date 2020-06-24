import React, { useMemo } from 'react';
import { FaHome, FaRocket, FaBars } from "react-icons/fa";

import {useWindowSize } from '../../hooks/window'
import { useElementFocus } from '../../hooks/element'

import Item from './Item';
import { Wrapper, Container, BarsIcon, Content  } from './styles';

const Sidebar: React.FC = () => {
  const [barsRef, barsFocused] = useElementFocus<HTMLDivElement>();
  const [width] = useWindowSize();

  const open = useMemo(() => {
    return barsFocused || width >= 768;
  }, [barsFocused, width])

  return (
    <Wrapper>
      <Container open={open}>
        <BarsIcon ref={barsRef} >
          <FaBars />
        </BarsIcon>

        <Content>
          <Item name='Home' open={open} icon={FaHome} to='/home' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
          <Item name='Rocket' open={open} icon={FaRocket} to='/rocket' />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Sidebar;
