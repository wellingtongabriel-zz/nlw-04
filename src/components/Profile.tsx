import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (

        <div className={ styles.profileContainer }>

            <img src="https://avatars.githubusercontent.com/u/43590122?s=460&u=a55480a36cdcf1dc4cc4b03bf77c90659848988c&v=4" alt="Wellington Barea"/>

            <div>
                <strong> Wellington Barea </strong>
                
                <p> 
                    <img src="icons/level.svg" alt="level"/>
                    Level { level }
                </p>
            </div>

        </div>

    );

}