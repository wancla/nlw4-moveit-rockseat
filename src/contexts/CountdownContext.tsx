import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengerContext";

interface CountdownContextData {
        minutes: number;
        seconds: number;
        hasFinished: boolean;
        isActive: boolean;
        startCountdown: () => void;
        resetCountdown: () => void;

}
interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout : NodeJS.Timeout;

export function CountdownProvider({children} : CountdownProviderProps) {
    /**
     *  Inicia a contagem a partir do valor definido
     * 
     */
    var initialState = 25 * 60;

    const { startNewChallenger }  = useContext(ChallengesContext);

    const [time, setTime] = useState(initialState);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    /**   
     *   Transforma 25 minutos em segundos
     *   @Math.floor arredonda o valor.      
     * */

    
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(initialState);
        
    }

    useEffect(()=>{
        if(isActive && time > 0){
            countdownTimeout=setTimeout(()=>{
                setTime(time - 1);
            },1000);
        }else if(isActive && time == 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenger();
        }
    },[isActive, time]);

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}
