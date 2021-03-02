import { useContext } from 'react';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';

export function CountDown() {

    const { 
        minutes,
        secounds,
        isActive,
        hasFinished,
        resetCountDown,
        startCountDown
    } = useContext(CountDownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secoundLeft, secoundRight] = String(secounds).padStart(2, '0').split('');

    return (
        <div>
            <div className={ styles.countDownContainer }>
                <div>
                    <span> { minuteLeft } </span>
                    <span> { minuteRight } </span>
                </div>
                <span>:</span>
                <div>
                    <span> { secoundLeft } </span>
                    <span> { secoundRight } </span>
                </div>
            </div>

            { 
                hasFinished ? (

                    <button 
                        disabled
                        className={ styles.countdownButton }
                        >
                            Ciclo Encerrado
                    </button>

                ) : (

                    <>
                        {
                            isActive ? (
                                <button 
                                    type="button" 
                                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                    onClick={resetCountDown}
                                    >
                                        Abandonar Ciclo
                                </button>
                            ) : (

                                <button 
                                    type="button" 
                                    className={ styles.countdownButton }
                                    onClick={startCountDown}
                                    >
                                        Iniciar um ciclo
                                </button>
                            )
                        }
                    </>

                )
            }

        </div>
        

    );

}