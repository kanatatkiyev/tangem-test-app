import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';

import { theme } from './theme';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};
