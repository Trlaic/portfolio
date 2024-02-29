import React, { ReactNode } from "react";
import { ColorsContext } from "./ColorsContext";


const ColorsProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const colorPairs = [
        {color1: '#C33764', color2: '#1D2671'},
        {color1: '#2E3192', color2: '#1BFFFF'},
        {color1: '#D4145A', color2: '#FBB03B'},
        {color1: '#009245', color2: '#FCEE21'}
    ]

    function randomColor() {
        return Math.floor(Math.random() * 4)
    }

    return <ColorsContext.Provider value={{colorPairs, randomColor}}>
        {children}
    </ColorsContext.Provider>
}

export default ColorsProvider