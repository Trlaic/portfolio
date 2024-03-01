import React, { ReactNode, useState } from "react";
import { ColorsContext } from "./ColorsContext";


const ColorsProvider: React.FC<{children: ReactNode}> = ({children}) => {
    console.log('RENDER')
    const [colors, setColors] = useState({color1: '#C33764', color2: '#1D2671'})

    const colorPairs = [
        {color1: '#C33764', color2: '#1D2671'},
        {color1: '#2E3192', color2: '#1BFFFF'},
        {color1: '#D4145A', color2: '#FBB03B'},
        {color1: '#009245', color2: '#FCEE21'}
    ]
    const randomColor = () => {
        const num = Math.floor(Math.random() * 4)
        setColors(colorPairs[num])
        return num
    }    

    return <ColorsContext.Provider value={{randomColor, colors}}>
        {children}
    </ColorsContext.Provider>
}

export default ColorsProvider