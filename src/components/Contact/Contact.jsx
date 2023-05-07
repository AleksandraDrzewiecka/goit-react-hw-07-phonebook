import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { deleteContact } from '../redux/contactSlice';
import { useDispatch } from 'react-redux';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <li className={css.listItem} key={id}>
        {name}: {number}
        <button
          className={css.listItemButton}
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </li>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;