import './ContactList.css';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/phonebook-selectors';
import * as phonebookActions from '../../redux/phonebook-actions';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(phonebookActions.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="Contacts__item">
          <p className="Contacts__text">
            {name} : {number}
          </p>

          <button type="button" onClick={() => onDeleteContact(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(phonebookActions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
