import React from 'react';
import styles from '../../appStyle.module.css';
function IndexComponent({ geek }) {
  return (
    <div>
      <h2 className={styles.textColor}>{geek}</h2>
    </div>
  )
}

export default IndexComponent
