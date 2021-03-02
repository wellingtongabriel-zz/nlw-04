import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExpirenceBar.module.css';

export function ExpirenceBar() {

    const { currentExperience, expirenceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round((currentExperience * 100)) / expirenceToNextLevel;

    return (

        <header className={ styles.expirenceBar }>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />

                <span className={ styles.currentExpirence } style={{ left: `${percentToNextLevel}%` }}>
                    { currentExperience } xp
                </span>
            </div>
            <span>{ expirenceToNextLevel } px</span>
        </header>

    );
}