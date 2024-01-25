import { FC, PropsWithChildren, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

import { BaseText } from './styles';

export interface TextProps {
    tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    color?: keyof DefaultTheme['colors'];
    children: ReactNode;
    weight?: 'default' | 'medium' | 'mediumUp' | 'bold';
}

export const Text: FC<PropsWithChildren<TextProps>> = (props) => {
    return <BaseText {...props} />;
};
