import React from 'react';
import GameSelection from './GameSelection';
import ImmutablePropTypes from 'react-immutable-proptypes';

const IndexPage = props => {
  const {
    saveTodos,
    addTodo,
    isChanged,
    todos,
    removeTodo,
    moveTodo,
  } = props;

  return (
      <GameSelection />
  );
};

IndexPage.propTypes = {
  saveTodos: React.PropTypes.func.isRequired,
  addTodo: React.PropTypes.func.isRequired,
  removeTodo: React.PropTypes.func.isRequired,
  moveTodo: React.PropTypes.func.isRequired,
  isChanged: React.PropTypes.bool.isRequired,
  todos: ImmutablePropTypes.list.isRequired,
};

export default IndexPage;
