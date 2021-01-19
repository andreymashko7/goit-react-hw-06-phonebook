import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { getFilter } from '../../redux/phonebook-selectors';
import * as phonebookActions from '../../redux/phonebook-actions';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(phonebookActions.changeFilter(e.target.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
