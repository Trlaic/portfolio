import { useContext } from "react";
import { ColorsContext } from "./ColorsContext";

export function useColors() {
    const context = useContext(ColorsContext)
    if(!context) throw new Error('ColorsContext is called from the component it\'s not available in')
    return context
}