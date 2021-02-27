import React,{createContext, useState, ReactNode, useEffect} from 'react'

import cookie from 'js-cookie';

import challenges from "../../challenges.json";
import LevelUpModal from '../components/LevelUpModal';

interface Challenger {
    type: "body" | "eye";
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    levelUp: () => void;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenger: Challenger;
    experienceToNextLevel: number;
    startNewChallenger: () => void;
    resetChallenger: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}


export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider ({children, ...rest}){
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0    );
    const [activeChallenger, setActiveChallenger] = useState(null);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
    const experienceToNextLevel = Math.pow((level+1)*4,2);

    /**
     * Alarme usando useEffect() do React, quando passado como parametro vazio
     * significa que será executa uma unica vez.
     */
    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(()=> {
        cookie.set('level', level.toString());
        cookie.set('currentExperience', currentExperience.toString());
        cookie.set('challengesCompleted', challengesCompleted.toString());
    },[level,currentExperience,challengesCompleted ]);

    function levelUp(){
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    }

    function closeLevelUpModal(){
        setIsLevelUpModalOpen(false);
    }

    function startNewChallenger(){
        const randomChallengerIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengerIndex];        

        setActiveChallenger(challenge);
            /**
             * Se o usuário deu permissão para tocar a notificação, então
             * faça a notificação quando um novo challeger estiver disponivel.
             */
            new Audio('/notification.mp3').play();
            
            if (Notification.permission == "granted"){
                new Notification('Novo desafio 🎉', {
                    body: `Valendo ${challenge.amount} exp!`
                })
            }
    }

    function resetChallenger(){
        setActiveChallenger(null);
    }

    function completeChallenge(){
        if(!activeChallenger){
            return;
        }
        const { amount } = activeChallenger;

        let finalExp = currentExperience + amount;

        if(finalExp >= experienceToNextLevel){
            finalExp = finalExp - experienceToNextLevel;
            levelUp();
        }
        setCurrentExperience(finalExp);
        setActiveChallenger(null);
        setChallengesCompleted(challengesCompleted+1);
    }

    return (
        <ChallengesContext.Provider value={{
                level,
                levelUp, 
                currentExperience, 
                challengesCompleted,
                activeChallenger,
                experienceToNextLevel,
                startNewChallenger,
                resetChallenger,
                completeChallenge,
                closeLevelUpModal,
                
              }}>
            {children}
            { isLevelUpModalOpen && <LevelUpModal/> }
        </ChallengesContext.Provider>
    )
}