import { FC, PropsWithChildren, ReactNode } from 'react';

import { Header } from '../Header';

import { Main } from './styles';

interface LayoutProps {
    bottomBlock?: ReactNode;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
    children,
    bottomBlock,
}) => {
    return (
        <>
            <Header>{bottomBlock}</Header>
            <Main>{children}</Main>
        </>
    );
};
