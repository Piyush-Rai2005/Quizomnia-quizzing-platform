import {useEffect,useState} from "react";
import { useDispatch } from "react-redux";
import * as Action from '../store/question.reducer';
import data from "../database/data";

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
                    setData(prev=>({...prev, Loading: false, apiData: question}));

                    /**dispatch action to store */
                    dispatch(Action.startExamAction(question));
                }
                else{
                    throw new Error("No question available");
                }
            }
            catch(error){
                setData(prev=>({...prev, Loading: false, serverError: error.message}));
            }   
    })();
},[dispatch]);
return [getData,setData];
}   