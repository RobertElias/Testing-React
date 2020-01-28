import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import {getData as mockGetData} from '../api';
import StarWarsCharacters from './StarWarsCharacters';


jest.mock('../api');

// test('renders button by text', ()=> {
//     //AAA Arrange, Act, Assert
//     const { getByText} = render(<StarWarsCharacters/>);


//     const prevButton = getByText(/previous/i);
//     const nextButton = getByText(/next/i);

//     fireEvent.click(prevButton);
//     fireEvent.click(nextButton);


// });

test('test if API is working', async ()=> {

    const someData = {
        next: "test",
        results: [
            {
                name: "Robert Elias",
                skin_color: "gold"
            }
        ]

    }

    mockGetData.mockResolvedValueOnce(someData);
    const {getByText} = render(<StarWarsCharacters/>);
    const next = getByText(/next/i);
    const prev = getByText(/previous/i);
    fireEvent.click(next);
    fireEvent.click(prev);
    expect(mockGetData).toHaveBeenCalledTimes(1);
    await wait(()=> expect(getByText(/robert elias/i)));
    
});