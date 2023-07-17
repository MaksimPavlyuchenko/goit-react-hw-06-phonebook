import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  padding: 40px;
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Label = styled.label`
  font-size: 30px;
`;
export const Input = styled.input`
  display: block;
  width: 200px;

  border: 1px solid #dcdcdc;
  border-radius: 4px;

  padding: 5px;
  margin-top: 20px;

  cursor: pointer;
  outline: none;
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
