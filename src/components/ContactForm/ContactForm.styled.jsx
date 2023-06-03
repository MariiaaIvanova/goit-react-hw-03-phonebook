import styled from '@emotion/styled';

export const Form = styled.form`
  text-align: center;
  margin-bottom: 20px;

`;

export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const InputLabel = styled.label`
  &:not(:last-child) {
    margin-right: 15px;
  }

`;

export const Input = styled.input`
  margin-left: 10px;
  padding: 7px;
 
  border-radius: 6px;
  border: none;
  outline: 0;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #20212447;
  font-size: 15px;
  &:focus {
    color: black;
    font-size: 15px;
  }
  
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 6px;
  border: 2px solid #342e69;
  background-color: #d4d0f5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
  background-color: #342e69;  
  color: #ffff;
  }
  cursor: pointer;
`;