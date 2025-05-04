'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Languages = 'en' | 'pt';
type TranslationObject = string | { [key: string]: TranslationObject };

interface TranslationContext {
    language: Languages;
    changeLanguage: (lang: Languages) => void;
    t: (path: string) => string | string[];
}

const TranslationContext = createContext<TranslationContext | undefined>(undefined);

interface TranslationProviderProps {
    children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Languages>('pt');
    const [translations, setTranslations] = useState<Record<string, TranslationObject>>({});

    useEffect(() => {
        import(`./../translations/${language}.json`).then(setTranslations);
    }, [language]);

    const changeLanguage = (lang: Languages) => {
        setLanguage(lang);
    };

    const t = (path: string): string | string[] => {
        const result = path
            .split('.')
            .reduce<TranslationObject | undefined>((prev, curr) => {
                if (typeof prev === 'object' && prev !== null) {
                    return prev[curr];
                }
                return undefined;
            }, translations);

        if (typeof result === 'string' || Array.isArray(result)) {
            return result;
        }

        return path; // Retorna o caminho caso a tradução não seja encontrada
    };

    return (
        <TranslationContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = (): TranslationContext => {
    const context = useContext(TranslationContext);
    if (context === undefined) {
        throw new Error('useTranslation precisa ser usado dentro do TranslationProvider');
    }
    return context;
};
