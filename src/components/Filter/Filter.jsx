import { useDispatch } from 'react-redux';

import { filteredName } from 'redux/filterSlice';

import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const filterHandler = evt => {
    dispatch(filteredName(evt.target.value));
  };
  return (
    <Label>
      Find contact by name
      <Input type="text" onChange={filterHandler} />
    </Label>
  );
};
export default Filter;
