import React from 'react'
import {useContext} from 'react';
import { ChallengesContext } from '../contexts/ChallengerContext';
import styles from '../styles/components/ExperienceBar.module.css';

export default function ExperienceBar() {
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);
    const percentToNextLevel = Math.round(currentExperience * 100 ) / experienceToNextLevel;
    return (
        <header className={styles.experienceBar}>
            <span>0 Exp</span>
                <div>
                    <div style={{width: `${percentToNextLevel}%`}}/>

                    <span className={styles.currentExperience} style={{left:`${percentToNextLevel}%`}}> 
                        {currentExperience} exp 
                    </span>

                </div>
            <span>{experienceToNextLevel} Exp</span>
        </header>
    )
}
