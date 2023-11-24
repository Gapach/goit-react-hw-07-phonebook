import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      {!filteredContacts?.length && !error && !isLoading && (
        <p>No contacts found.</p>
      )}
      {error && <p>{error}</p>}
      <ul className="list">
        {filteredContacts.map(({ id, name, phone }) => (
          <li key={id}>
            <p>
              {name}: {phone}
            </p>
            <button className={css.btn} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
