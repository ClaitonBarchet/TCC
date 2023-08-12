import { doc, updateDoc } from "firebase/firestore";
import{ db }from './firebase'

const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc (db, 'tasks',id)
    try{
        await updateDoc(taskDocRef,{
            title: title,
            description: description
        })
        onclose()
    }catch(err){
        alert(err)
    }
}