import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            black: string;
            dark: string;
            white: string;
            primary: string;
            primaryLight: string;
            gray: string;
            grayLight: string;
        };
    }
}
