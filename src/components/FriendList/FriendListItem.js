import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default-avatar.jpg';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span
      className={styles.status}
      style={{
        backgroundColor: isOnline ? '#00fa9a' : '#b22222',
      }}
    ></span>
    <img className={styles.avatar} src={avatar} alt={name} width="128" />
    <p className={styles.name}>{name}</p>
  </>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
