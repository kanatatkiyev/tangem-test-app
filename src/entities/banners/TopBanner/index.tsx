import { FC, useContext, useEffect, useRef, useState } from 'react';

import { AppContext } from '@shared/context/AppContext';
import { Text } from '@shared/ui/Text';
import { actions } from '@shared/context/AppContext/actions';

import giftImg from '@shared/assets/images/gift.webp';
import CloseIcon from '@shared/assets/icons/close.svg?react';

const { toggleHeaderBannerVisible } = actions;

import {
    TopBannerContainer,
    ControlContainer,
    TextContainer,
    GiftContainer,
    StyledGift,
    List,
    ListItem,
    ShopButton,
    CloseButton,
    BlackFridayText,
    CommaText,
    DateText,
    CheckoutText,
    PromocodeText,
    ButtonText,
} from './styles';

export const TopBanner: FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(true);
    const { dispatch } = useContext(AppContext);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) {
                dispatch(toggleHeaderBannerVisible(false));
                observer.unobserve(element);
            }
        });

        observer.observe(ref.current);

        return () => observer.unobserve(element);
    }, [dispatch, isOpen]);

    const handleClose = () => {
        dispatch(toggleHeaderBannerVisible(false));
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <TopBannerContainer ref={ref}>
            <GiftContainer>
                <StyledGift src={giftImg} />
            </GiftContainer>

            <TextContainer>
                <List>
                    <ListItem>
                        <Text>
                            <BlackFridayText weight="mediumUp">
                                Black Friday
                            </BlackFridayText>
                            <CommaText weight="mediumUp">,</CommaText>
                            <DateText>24-27 Nov</DateText>
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="primary" weight="mediumUp">
                            10%OFF
                        </Text>
                    </ListItem>
                    <ListItem>
                        <PromocodeText>
                            Use code
                            <Text color="primary" weight="mediumUp">
                                {' '}
                                10FRIDAY
                            </Text>
                            <CheckoutText> at checkout</CheckoutText>
                        </PromocodeText>
                    </ListItem>
                </List>
            </TextContainer>

            <ControlContainer>
                <ShopButton size="small" variant="light" isRounded={true}>
                    <ButtonText weight="mediumUp">Shop now</ButtonText>
                </ShopButton>

                <CloseButton
                    size="zero"
                    variant="transparent"
                    onClick={handleClose}
                >
                    <CloseIcon />
                </CloseButton>
            </ControlContainer>
        </TopBannerContainer>
    );
};
