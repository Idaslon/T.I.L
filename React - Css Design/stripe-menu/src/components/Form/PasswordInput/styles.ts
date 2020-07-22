import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 5px;
  border: 1px solid #ced4da;
  background: #fff;

  > div {
    width: 100%;

    input {
      border: 0;
      outline: 0;
    }
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;

  border-radius: 5px;
  border: 1px solid #ced4da;
  background: #fff;
`;

export const CustomInput = styled.input`
  background-color: #fff !important;
  width: 100%;

  margin-right: 10px;

  color: #333;
`;
