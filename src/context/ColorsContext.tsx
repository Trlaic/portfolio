import { createContext } from "react";

export const ColorsContext = createContext({colorPairs: [{color1: '', color2: ''}], randomColor: () : number => {return Math.floor(Math.random())}})
