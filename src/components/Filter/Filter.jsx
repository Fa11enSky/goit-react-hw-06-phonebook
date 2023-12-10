import css from './filter.module.css';
import { filterUse } from 'store/filterSlice';
import { useDispatch } from 'react-redux';
const Filter = () => {
  const dispatch = useDispatch();
  const handleInput = ev => {
    const text = ev.target.value;
    dispatch(filterUse(text));
  };
  return (
    <label className={css.filter_label}>
      Find Your contacts by name
      <input
        type="text"
        name="filter"
        placeholder="Search"
        onChange={handleInput}
      />
    </label>
  );
};

export default Filter;
