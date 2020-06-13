import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={styles.item} key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
