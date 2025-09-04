'use client'
import React, { createContext } from 'react'

export const MyContext = createContext();

const Context = ({ children }) => {
    const username = "Akshita Gupta Context API";

    return (
        <div>
            <MyContext.Provider value={username}>
                <h1>Context API : {username}</h1>
                {children}
            </MyContext.Provider>
        </div>
    )
}

export default Context;

// --- IGNORE ---
// Context Api --> It is a way to manage state globally.
// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
// It is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.