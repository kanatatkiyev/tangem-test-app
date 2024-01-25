import { createContext, FC, PropsWithChildren, useReducer } from 'react';

import { ActionTypes, ContextType, State } from './types';

export const AppContext = createContext<ContextType>({} as ContextType);

const initialState: State = {
    isHeaderBannerVisible: true,
};

const countReducer = (state: State, action: ActionTypes) => {
    switch (action.type) {
        case 'TOGGLE_HEADER_VISIBLE': {
            return { ...state, isHeaderBannerVisible: action.payload };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(countReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
