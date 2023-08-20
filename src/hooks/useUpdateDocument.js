import { useState, useEffect, useReducer } from "react"
import { db } from "../firebase/config"
import { collection, updateDoc, Timestamp, doc } from "firebase/firestore"

const initialState = {
    loading: null,
    error: null
}

const insertReducer = (state, action)=>{
    switch(action.type){

        case "LOADING":
            return{ loading: true, error: null };
        case "INSERTED_DOC":
            return{ loading: false, error: null };
        case "ERROR":
            return{ loading: false, error: action.payload}
        default:
            return state;
    }
}

export const useUpdateDocument = (docCollection) =>{

    const[response, dispatch] = useReducer(insertReducer, initialState);

    // deal memory leak
    const[cancelled, setCancelled] = useState(false)

    const checkCancelBeforeDispatch = (action)=>{
        if(!cancelled){
            dispatch(action)
        }
    }

    const updateDocument = async(document) =>{
        checkCancelBeforeDispatch({
            type: "LOADING",
        })

        try {
            console.log(document)
            // const newDocument = {...document,createdAt: Timestamp.now()}
            const updateDocument = await updateDoc(
                doc(db,"posts", document.id),
                document
            )
                console.log("testando")
                console.log(document)

            checkCancelBeforeDispatch({
                type: "INSERTED_DOC",
                payload: updateDocument
            })
            
        }catch(error) {

            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.message,
            })
        }
    }

    useEffect(()=> {
        return () => setCancelled(true);
    },[]);

    return { updateDocument, response };

}