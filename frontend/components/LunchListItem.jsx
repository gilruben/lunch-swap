import React from 'react';

const LunchListItem = (props) => {
  let lunch = props.lunch;
  let user = props.lunch.user;

  return (
    <div id="lunch-item">
      <h3>{lunch.title}</h3>
      <h4>{`${user.first_name} ${user.last_name}`}</h4>
      <p>{lunch.description}</p>
    </div>
  )
}

export default LunchListItem;
