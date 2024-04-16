import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProvider } from '../../utils/test/renderWithProvider';
import Checkbox from './Checkbox';

describe("Checkbox", () => {
    it('renders without crashing', async () => {
        const onChange = jest.fn()
        renderWithProvider(<Checkbox id="test" onChange={onChange} />)
        const checkbox = screen.getByTestId("test")
        expect(checkbox).toBeInTheDocument()
    });

    it('user is able to toggle checbox', async () => {
        const onChange = jest.fn()
        renderWithProvider(<Checkbox id="test" onChange={onChange} />)
        const checkbox = screen.getByTestId("test")
        expect(checkbox.checked).toBe(false);
        fireEvent.click(checkbox)
        expect(checkbox.checked).toBe(true);
    });
})