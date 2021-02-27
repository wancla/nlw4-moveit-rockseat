import React, { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';



import styles from '../styles/components/Countdown.module.css';

let countdownTimeout : NodeJS.Timeout;

export default function Countdown() {
    const {
        minutes,
         seconds,
          hasFinished,
           isActive,
            startCountdown,
             resetCountdown } 
    = useContext(CountdownContext);

    /**
     *  Transforma em string -> @padStart verifica se o minuto são 2 caracteres
     *  caso não seja o @split divide a string em 2 caracteres, caso seja 1 valor
     *  acrescenta 0 na frente.
     *  */ 

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');
   

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                    disabled
                    type="button" 
                    className={styles.startCountdownBtn}                        
                >                 
                    Ciclo encerrado
                </button>
            ): (
                <>
                    {isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.startCountdownBtn} ${styles.startCountdownBtnActive}`}
                            onClick={resetCountdown}      
                        > 
                        
                            Abandonar Ciclo
                        </button>
                    ) : (
                        <button 
                            type="button" 
                            className={styles.startCountdownBtn}
                            onClick={startCountdown}      
                        > 
                            
                            Iniciar um Ciclo 
                        </button>
                        
                    ) }  
                </> 
            )
                
            }                         
        </div>  
    )
}
