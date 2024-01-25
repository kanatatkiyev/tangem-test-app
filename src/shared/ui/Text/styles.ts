import styled from 'styled-components';
import { TextProps } from './index';
import { createElement } from 'react';

const weights: Record<string, number> = {
    default: 400,
    medium: 500,
    mediumUp: 600,
    bold: 700,
};

export const BaseText = styled(({ tag, children, ...props }: TextProps) =>
    createElement(tag || 'span', props, children),
)`
    color: ${({ color, theme }) => theme.colors[color || 'white']};
    font-weight: ${({ weight }) => weights[weight || 'default']};
`;
