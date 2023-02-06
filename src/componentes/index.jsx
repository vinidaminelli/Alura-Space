import React from 'react'
import styles from './Tags/Tags.module.scss'

export default function Tags() {
  return (
    <div className={styles.tags}>
        <p>Filtre por tags:</p>
        <ul className={styles.tags__lista}>
            <li>Estrelas</li>
            <li>Galaxias</li>
            <li>Lua</li>
            <li>Planeta</li>
        </ul>
    </div>
  )
}
