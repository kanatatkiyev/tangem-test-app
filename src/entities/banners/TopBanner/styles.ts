import styled from 'styled-components';

import { BaseText } from '@shared/ui/Text/styles';
import { Button } from '@shared/ui/Button';
import { device } from '@shared/ui/GlobalStyles/media';

export const TopBannerContainer = styled.div`
    position: relative;
    height: 54px;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.black};
    padding: 0 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${device.tablet} {
        justify-content: end;
    }
`;

export const GiftContainer = styled.div`
    width: 100px;

    ${device.tablet} {
        width: unset;
    }
`;

export const StyledGift = styled.img`
    position: absolute;
    top: -30px;
    left: 20px;

    width: 310px;
    height: auto;
    z-index: 0;

    ${device.laptop} {
        left: -20px;
    }

    ${device.tablet} {
        left: -45px;
    }
`;

export const ControlContainer = styled.div`
    display: flex;
    gap: 15px;
`;

export const TextContainer = styled.div`
    position: relative;
`;

export const List = styled.ul`
    display: flex;
    gap: 24px;
    list-style-type: none;
    color: ${({ theme }) => theme.colors.gray};

    ${device.tablet} {
        gap: 6px;
    }
`;

export const ListItem = styled.li`
    &:not(:first-child) {
        list-style-type: disc;

        ${device.tablet} {
            list-style-type: none;
        }
    }
`;

export const ShopButton = styled(Button)`
    ${device.tablet} {
        display: none;
    }
`;

export const CloseButton = styled(Button)``;

// TEXT STYLES

export const BlackFridayText = styled(BaseText)``;

export const CommaText = styled(BaseText)`
    ${device.laptop} {
        display: none;
    }

    ${device.tablet} {
        display: inline;
    }
`;

export const DateText = styled(BaseText)`
    ${device.laptop} {
        display: none;
    }
`;

export const CheckoutText = styled(BaseText)`
    ${device.laptop} {
        display: none;
    }
`;

export const PromocodeText = styled(BaseText)`
    ${device.tablet} {
        display: none;
    }
`;

export const ButtonText = styled(BaseText)`
    background-color: ${({ theme }) => theme.colors.black};
    background: linear-gradient(
        110deg,
        rgba(138, 138, 138, 1) 0%,
        rgba(0, 0, 0, 1) 68%
    );

    -webkit-text-fill-color: transparent;
    background-clip: text;
`;
