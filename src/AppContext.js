// src/AppContext.js
import React, { createContext, useEffect, useState } from 'react';
import { arabic, english } from './Content';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [language, setlanguage] = useState('English');
    const [content, setcontent] = useState(english);
    useEffect(() => {
        if (language === 'English') setcontent(english)
        else if (language === 'عربي') setcontent(arabic)
    }, [language])

    // You can add more state variables and functions as needed

    return (
        <AppContext.Provider value={{ content, language, setlanguage }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
