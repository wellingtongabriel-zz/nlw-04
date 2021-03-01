import { useEffect, useState } from 'react';
import { isatty } from 'tty';
import styles from '../styles/components/CountDown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function CountDown() {

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const secounds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secoundLeft, secoundRight] = String(secounds).padStart(2, '0').split('');

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])

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