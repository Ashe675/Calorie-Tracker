import { useContext } from "react";
import { ActivityContext } from "../context/ActivitiContext";

export const useActivity = () =>{
    const context = useContext(ActivityContext)

    if(!context) {
        throw new Error('el hook useActiviy debe ser utilizado en un ActivityProvider')
    }

    return context
}