import { FC, useContext, useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

import { AppContext } from '@shared/context/AppContext';
import { Text } from '@shared/ui/Text';

import CloseIcon from '@shared/assets/icons/close.svg?react';
import giftImg from '@shared/assets/images/gift.webp';

import { ANIMATION_DURATION, LS_BANNER_STATE } from './constants';
import {
    StickyBannerContainer,
    StyledGiftImg,
    Content,
    ContentTitle,
    ContentDiscount,
    ContentButton,
    CloseButton,
} from './styles';

export const StickyBanner: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {
        state: { isHeaderBannerVisible },
    } = useContext(AppContext);

    const lsBannerState = localStorage.getItem(LS_BANNER_STATE);

    useEffect(() => {
        if (!isHeaderBannerVisible) {
            setIsOpen(true);
        }
    }, [isHeaderBannerVisible]);

    if (lsBannerState) return null;

    return (
        <Transition
            in={isOpen}
            timeout={ANIMATION_DURATION}
            onExited={() => localStorage.setItem(LS_BANNER_STATE, 'visited')}
            unmountOnExit
            mountOnEnter
        >
            {(state) => {
                return (
                    <StickyBannerContainer state={state}>
                        <StyledGiftImg
                            src={giftImg}
                            alt="Bottom banner gift image"
                        />
                        <Content>
                            <ContentTitle tag="h2" weight="mediumUp">
                                Black Friday
                            </ContentTitle>
                            <ContentDiscount tag="h3" weight="mediumUp">
                                10%OFF
                            </ContentDiscount>
                            <Text color="grayLight">
                                Use code{' '}
                                <Text color="primary" weight="mediumUp">
                                    10FRIDAY
                                </Text>{' '}
                                at checkout
                            </Text>
                            <ContentButton>
                                Shop now through Monday
                            </ContentButton>
                        </Content>

                        <CloseButton
                            size="zero"
                            variant="transparent"
                            onClick={() => setIsOpen(false)}
                        >
                            <CloseIcon />
                        </CloseButton>
                    </StickyBannerContainer>
                );
            }}
        </Transition>
    );
};
