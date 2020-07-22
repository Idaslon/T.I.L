import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;

  /* background: #ddd; */
`;

export const VideoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  justify-items: center;

  width: 95%;
`;

export const VideoDetails = styled.li`
  display: flex;
  flex-direction: column;

  padding: 10px;

  cursor: pointer;
`;

export const VideoImage = styled.img`
  width: 100%;
  max-width: 250px;

  border-radius: 4px;
`;

export const VideoFooter = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 12px;
`;

export const VideoName = styled.strong`
  font-size: 18px;
  font-size: 1.125rem;
`;

export const VideoUsername = styled.span`
  margin-top: 4px;

  color: #555;
`;
