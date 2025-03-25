"use client";

import React, { createContext, useState, useEffect} from 'react';

// Create a context for theme
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check for user preference or system perference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) { 
            setIsDarkMode(savedTheme === 'dark');
        } else { 
            const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(userPrefersDark);
        }
    }, []);

    // Toggle dark mode and save the preference to localStorage
    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            const newTheme = !prev;
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            return newTheme;
        });
    };

    return(
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};


