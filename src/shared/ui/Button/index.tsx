import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import { StyledButton } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'small' | 'default' | 'zero';
    variant?: 'light' | 'dark' | 'transparent';
    isRounded?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    ...rest
}) => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};
