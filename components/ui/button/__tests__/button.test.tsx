import { fireEvent, render, screen } from '@testing-library/react';
import { Button, OutlineButton } from "@/components/ui/button/button"

import Providers from '@/app/providers';

describe('Button', () => {
    it('renders Button component with correct children', () => {
        render(
            <Providers>
                <Button>Click Me </Button>
            </Providers>
        );

        expect(screen.getByText('Click Me'))
    });

    it('calls onClick handler when Button is clicked', () => {
        const onClickMock = jest.fn();

        render(
            <Providers>
                <Button onClick={onClickMock}>Click Me</Button>
            </Providers>
        );

        fireEvent.click(screen.getByText('Click Me'));
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('calls onMouseEnter handler when Button is hovered over', () => {
        const onMouseEnterMock = jest.fn();

        render(
            <Providers>
                <Button onMouseEnter={onMouseEnterMock}>Hover Me</Button>
            </Providers>
        );

        fireEvent.mouseEnter(screen.getByText('Hover Me'));
        expect(onMouseEnterMock).toHaveBeenCalledTimes(1);
    });


    it('renders OutlineButton component with correct children', () => {
        render(
            <Providers>
                <OutlineButton>Outline Button</OutlineButton>
            </Providers>
        );

        expect(screen.getByText('Outline Button'));
    });

    it('matches Button component snapshot', () => {
        const { container } =
            render(
                <Providers>
                    <Button >Click Me</Button>
                </Providers>
            );

        expect(container).toMatchSnapshot();
    });

    it('matches OutlineButton component snapshot', () => {
        const { container } =
            render(
                <Providers>
                    <Button >Click Me</Button>
                </Providers>
            );

        expect(container).toMatchSnapshot();
    });
});