import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const sizesStyles = {
    small: css`
        height: 38px;
        padding: 0 18px;
    `,
    default: css`
        height: 42px;
        padding: 0 24px;
    `,
    zero: css`
        padding: 0;
        height: unset;
    `,
};

const variantStyles = {
    light: css`
        background: ${({ theme }) => theme.colors.white};
    `,
    dark: css`
        background: ${({ theme }) => theme.colors.gray};
    `,
    transparent: css`
        background: transparent;
    `,
};

export const StyledButton = styled.button<ButtonProps>`
    border-radius: 8px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    ${({ size }) => sizesStyles[size || 'default']};
    ${({ variant }) => variantStyles[variant || 'dark']};

    ${({ isRounded }) =>
        isRounded &&
        css`
            border-radius: 14px;
        `};
`;
