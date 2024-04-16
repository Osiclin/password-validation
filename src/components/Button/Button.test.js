import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProvider } from '../../utils/test/renderWithProvider';
import Button from './Button';

describe("Button", () => {
    it('renders without crashing', async () => {
        const onClick = jest.fn()
        renderWithProvider(<Button name="Test" onClick={onClick} />)
        expect(screen.getByText("Test")).toBeInTheDocument()
    });

    it('onClick function is called on click', async () => {
        const onClick = jest.fn()
        renderWithProvider(<Button name="Test" onClick={onClick} theme='secondary' />)
        expect(screen.getByText("Test")).toBeInTheDocument()
        fireEvent.click(screen.getByRole("button", { name: "Test" }))
        expect(onClick).toHaveBeenCalled()
    });
})