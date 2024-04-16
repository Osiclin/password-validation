import React from 'react'
import { renderWithProvider } from './renderWithProvider';

export function renderHook(hook) {
    let results;
    function HookWrapper() {
        results = hook()
        return null;
    }

    renderWithProvider(<HookWrapper />)
    return results
}