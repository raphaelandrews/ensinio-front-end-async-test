'use client';

import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/styles/global-styles';
import theme from '@/styles/theme';

const Providers = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
};

export default Providers;