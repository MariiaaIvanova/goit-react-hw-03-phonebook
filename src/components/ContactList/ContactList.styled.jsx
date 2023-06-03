import styled from '@emotion/styled';

export const ContactItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  `;

export const ContactName = styled.span`
  `;

export const ContactNumber = styled.span`

`;

export const Button = styled.button`
  padding: 5px 20px;
  margin-left: 20px;  
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