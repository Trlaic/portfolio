import { createContext } from "react";

export const ColorsContext = createContext({randomColor: () : number => Math.floor(Math.random()), colors: {color1: '#ff0000', color2: '#ff0000'}})
