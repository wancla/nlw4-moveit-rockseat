import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengerContext';

import styles from '../styles/components/LevelUpModal.module.css';

export default function LevelUpModal() {
    const {level, closeLevelUpModal} = useContext(ChallengesContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>
                    Você alcançou o proximo nivel
                </p>
                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg"/>
                </button>
            </div>
        </div>
    )
}
