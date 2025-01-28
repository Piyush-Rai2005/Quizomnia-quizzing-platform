import {useEffect,useState} from "react";
import { useDispatch } from "react-redux";
import * as Action from '../store/question.reducer';
import data ,{answers} from "../database/data";

/**fetch question hook to fetch api data and set values to store */

export const useFetchQuestion = (url) => {
    const [getData, setData] = useState({Loading: false, apiData: [],serverError: null});
    const dispatch = useDispatch();
    useEffect(() => {
        setData(prev=>({...prev, Loading: true}));

        /** async function fetch backend data */

        (async () => {
            try{
                let question = await data;

                if(question.length > 0){
                    setData(prev=>({...prev, Loading: false}));
                    setData(prev =>({...prev, apiData : {question,answers}}));

                    /**dispatch action to store */
                    dispatch(Action.startExamAction({question,answers}));
                }
                else{
                    throw new Error("No question available");
                }
            }
            catch(error){
                setData(prev=>({...prev, Loading: false}));
                setData(prev =>({...prev,serverError: error}));
            }   
    })();
},[dispatch]);
return [getData,setData];
}   
//we cannot directly pass a hook inside a function , we can only pass a hook inside another hook//
export const MoveNextQuestion=()=>async(dispatch)=>{
    try{
        dispatch(Action.moveNextAction())
    }
    catch(error){
        console.log(error);
    }
}

export const MovePrevQuestion=()=>async(dispatch)=>{
    try{
        dispatch(Action.movePrevAction())
    }
    catch(error){
        console.log(error);
    }
}