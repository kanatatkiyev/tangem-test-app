import styled from 'styled-components';
import { TransitionStatus } from 'react-transition-group';

import { Text } from '@shared/ui/Text';
import { Button } from '@shared/ui/Button';

import { ANIMATION_DURATION } from './constants';
import { device } from '@/shared/ui/GlobalStyles/media';

export const StickyBannerContainer = styled.div<{ state: TransitionStatus }>`
    position: fixed;
    bottom: 30px;
    right: 30px;

    padding: 35px;
    width: 600px;
    height: 350px;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.dark};

    display: flex;
    justify-content: end;

    box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.45);
    overflow: hidden;

    transition: opacity ${ANIMATION_DURATION}ms ease-in-out;

    opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};

    ${device.tablet} {
        bottom: 0;
        right: 0;
        width: 100%;
        border-radius: 0;
        justify-content: center;
    }
`;

export const StyledGiftImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 0;

    ${device.tablet} {
        left: -170px;
    }
`;

export const Content = styled.div`
    width: 50%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${device.tablet} {
        width: 100%;
    }
`;

export const ContentTitle = styled(Text)`
    margin-bottom: 25px;
    font-size: 46px;
    line-height: 50px;
`;

export const ContentDiscount = styled(Text)`
    margin-bottom: 14px;
    font-size: 40px;
    line-height: 44px;
    background-color: ${({ theme }) => theme.colors.primary};
    background: linear-gradient(
        110deg,
        rgba(125, 83, 23, 1) 31%,
        rgba(237, 223, 149, 1) 100%
    );

    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

export const ContentButton = styled(Button)`
    margin-top: 40px;
    background: rgba(255, 255, 255, 0.1);
    font-weight: 600;
`;

export const CloseButton = styled(Button)`
    position: absolute;
    top: 20px;
    right: 20px;
`;
