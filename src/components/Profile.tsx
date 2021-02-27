import React, { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengerContext";

import styles from "../styles/components/Profiles.module.css";

export default function Profile() {
    const {level} = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="icons/avatar.svg" alt="avatar"/>
                <div>
                    <strong>User</strong>
                    <p>
                        <img src="icons/level.svg" alt="level"/>
                        Level {level}
                    </p>
                </div>
        </div>
    )
}
