import { StickyBanner } from '@entities/banners/StickyBanner';
import { TopBanner } from '@entities/banners/TopBanner';

import { Layout } from '@shared/ui/Layout';

export const Root = () => {
    return (
        <Layout bottomBlock={<TopBanner />}>
            <StickyBanner />
        </Layout>
    );
};
