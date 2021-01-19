import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactForm.module.css';
import { getValue } from '../../redux/phonebook-selectors';
import * as phonebookActions from '../../redux/phonebook-actions';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getValue);
  const dispatch = useDispatch();

  const onSubmit = (name, number) =>
    dispatch(phonebookActions.addContact(name, number));

  const matchContact = () => {
    const namesInPhonebook = contacts.map(({ name }) => name);
    const numbersInPhonebook = contacts.map(({ number }) => number);

    if (
      namesInPhonebook.includes(name) ||
      numbersInPhonebook.includes(number)
    ) {
      alert(`${name}${number} is already in contacts!!!`);
      return true;
    }

    if (name === '' || number === '') {
      alert('Please enter all fields');
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setName('');
    setNumber('');

    if (matchContact()) {
      return;
    }

    onSubmit(name, number);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.container}>
        <label htmlFor="name" className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => {
              setName(e.currentTarget.value);
            }}
            placeholder="Rosie Simpson"
            className={s.input_name}
          ></input>
        </label>

        <label htmlFor="number" className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={e => {
              setNumber(e.currentTarget.value);
            }}
            placeholder="459-12-56"
            className={s.input}
          ></input>
        </label>
      </div>

      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) =>
//     dispatch(phonebookActions.addContact(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
// };
