import { changeFilter  } from '../../redux/filtersSlice';
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter  } from '../../redux/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter )
  const handleChangeBox = (e) => {
  dispatch(changeFilter (e.target.value))
}

  return (
    <div>
      <label className={css.searchBoxDiv}>
        <span>Find contacts by name</span>
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={handleChangeBox}
          className={css.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;