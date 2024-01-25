import { Root } from '@pages/Root';

import { ThemeProvider } from '@shared/ui/ThemeProvider';
import { GlobalStyles } from '@shared/ui/GlobalStyles';
import { AppContextProvider } from '@shared/context/AppContext';

export const App = () => {
    return (
        <ThemeProvider>
            <GlobalStyles />
            <AppContextProvider>
                <Root />
            </AppContextProvider>
        </ThemeProvider>
    );
};
