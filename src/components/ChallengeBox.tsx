/**
 * 
 * Todos os imports em relação ao React.
 *  
*/
import React, {
     
    useContext, 
    useState 
}     
from 'react';

/**
 * 
 * Todos os imports de context criado na aplicação.
 */
import { ChallengesContext } from '../contexts/ChallengerContext';
import { CountdownContext } from '../contexts/CountdownContext';

/**
 * 
 * Todos os imports dos estilos da aplicação.
 */
import styles from "../styles/components/ChallengeBox.module.css";

/**
 * 
 * 
 * 
 */
export default function ChallengeBox() {
    /**
     * Declaração da variaveis responsaveis pelo tratamento dos desafios, usando context Api do React.
     * activeChallenger => variavel dentro do @ChallengesContext com o estado inicial nulo e pode se atribuido 
     * Verdadeiro ou falso.
     * 
     * resetChallenger  => função dentro do context que reseta os desafios pro estado inicial.
     * 
     * completeChallenge =>
     */
    const {activeChallenger, resetChallenger, completeChallenge} = useContext(ChallengesContext);

    /**
     * @CountdownContext
     * Declaração da variavel que armazena o contexto referente ao contador de tempo relacionado aos desafios.
     * 
     */
    const {resetCountdown} = useContext(CountdownContext);

    /**
     * 
     * Função do botão de desafio completo.
     */
    function handleChallengeSucceded(){
        completeChallenge();
        resetCountdown();
    }

    /**
     * 
     * Função do botão de desafio incompleto.
     */
    function handleChallengeFailed(){
        resetChallenger();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenger ? (
                <div className={styles.challengerActive}>
                    <header>Ganhe {activeChallenger.amount} exp</header>

                    <main>
                        <img src={`icons/${activeChallenger.type}.svg`}/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenger.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challFailedBtn}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>

                        <button 
                            type="button"
                            className={styles.challSuccededBtn}
                            onClick={handleChallengeSucceded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengerNotActive}>
                    <strong>
                        Finalize um ciclo para receber um desafio
                    </strong>
                    <p>
                        <img src="icons/level-up.svg"/>
                        Avance de Level completando desafios
                    </p>
                </div> 
            )}           
        </div>
    )
}
