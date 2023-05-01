import { useReducer } from 'react'
import { createContext } from 'react'
import { initState, reducer, reducerActions } from '../Reducer/ThemeReducer/ThemeReducer'
const initValue = {
  isDark: true,
  toggleTheme:()=>{}
}
export const ThemeContext = createContext(initValue)

export const ThemeProvider = ({ children }) => {
    let [theme,dispatch]=useReducer(reducer,initState);
    let themeProvider = {
        isDark:theme.isDark,
        toggleTheme:()=>{
            dispatch({type:reducerActions.toggle})
        }
    }
  return (
    <ThemeContext.Provider value={themeProvider}>{children}</ThemeContext.Provider>
  )
}
