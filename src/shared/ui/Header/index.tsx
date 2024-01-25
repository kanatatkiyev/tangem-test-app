import { FC, PropsWithChildren } from 'react';

import { BottomHeaderContent, StyledHeader, TopHeaderContent } from './styles';

export const Header: FC<PropsWithChildren> = ({ children }) => {
    return (
        <StyledHeader>
            <TopHeaderContent></TopHeaderContent>
            <BottomHeaderContent>{children}</BottomHeaderContent>
        </StyledHeader>
    );
};
