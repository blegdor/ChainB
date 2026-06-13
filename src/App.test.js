// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainB title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainB/i);
    expect(titleElement).toBeInTheDocument();
});
