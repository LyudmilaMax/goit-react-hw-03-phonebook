import { List, Item, Button } from './ContactList.styled';
import PropTypes from 'prop-types';

export function ContactList ({ contacts, onDelete }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name} : {number}
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string.isRequired),
  onDelete: PropTypes.func.isRequired,
};


