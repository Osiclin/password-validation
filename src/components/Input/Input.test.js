import React from "react";
import { screen } from '@testing-library/react'
import Input from "./Input";
import { renderWithProvider } from '../../utils/test/renderWithProvider';

describe('Input', () => {
    test('check if input accept values for type text', () => {
        const handleChange = jest.fn()
        const onBlur = jest.fn()
        renderWithProvider(<Input label="test" id='test' type="text" value="tester" onChange={handleChange} showError={true} onBlur={onBlur} className='mb-3' symbol='NGN' />)

        const element = screen.getByDisplayValue(/test/i)
        expect(element).toHaveValue("tester");
    })

    test('check if input accept values for type password', () => {
        const handleChange = jest.fn()
        const onBlur = jest.fn()
        renderWithProvider(<Input label="test" id='test' type="password" value="tester" name='password' onChange={handleChange} showError={true} onBlur={onBlur} className='mb-3' />)

        const element = screen.getByDisplayValue(/test/i)
        expect(element).toHaveValue("tester");
    })
})