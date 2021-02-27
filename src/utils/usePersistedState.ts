import {useState,useEffect, Dispatch, SetStateAction} from 'react';

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
]
 
function usePersistedState<T> (key: string, initialState: T){
    const [state, setState] = useState(()=>{
        const storageValue = localStorage.getItem(key);

        if(storageValue){
            return console.log(JSON.parse(storageValue));
        }else{
            console.log('entrou no else')
            return initialState;
            
        }
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state));
    },[key, state]);

    return [state, setState];
}
export default usePersistedState;