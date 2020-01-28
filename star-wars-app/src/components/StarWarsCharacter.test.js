import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';

test('renders character names', async ()=> {
    //AAA Arrange, Act, Assert
    const { getByLabelText, getByText} = render(<StarWarsCharacters/>);

    //const characterName = getByLabelText(/name/i);

    const prevButton = getByText(/previous/i);
    const nextButton = getByText(/next/i);

    fireEvent.click(prevButton);
    fireEvent.click(nextButton);


});

test('test test', ()=> {});