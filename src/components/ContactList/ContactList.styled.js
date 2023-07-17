import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const Button = styled.button`
  border: 1px solid #dcdcdc;
  border-radius: 4px;

  font-size: 14px;
  padding: 5px 10px;

  cursor: pointer;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;
