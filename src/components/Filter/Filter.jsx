import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <div className={css.filter}>
      <label>
        Find contacts by name
        <input
          className={css.filterInput}
          type="text"
          value={filter}
          onChange={event => dispatch(setFilter(event.target.value.trim()))}
        />
      </label>
    </div>
  );
};
