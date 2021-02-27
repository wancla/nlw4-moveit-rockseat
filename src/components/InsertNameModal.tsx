import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengerContext';

import styles from '../styles/components/LevelUpModal.module.css';

export default function InsertNameModal() {
    const {closeLevelUpModal} = useContext(ChallengesContext);
    return (
        
        <div className={styles.overlay}>
           
        </div>
        
    )
}
