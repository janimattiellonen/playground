import React from 'react';
import styles from './App.pcss';
import logo from '../images/trollo.png';

const App = props => {
  const { children } = props;
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default App;
