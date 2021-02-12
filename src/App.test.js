import '@testing-library/jest-dom';
import * as FetchShow from './api/FetchShow';
import App from './App';
import React from 'react';
import { render, waitForElementToBeRemoved } from "@testing-library/react";

describe("<App />", () => {
    it("Displays show name and summary", async() => {
        const mockResponse = {
            name: "Pwaypway",
            summary: "Indigenous Person",
            image: {original: ""},
            _embedded: { episodes: []}
        }
        jest.spyOn(FetchShow, "default").mockResolvedValueOnce(mockResponse)
        const {getByText} = render(<App />)
        //Wait for useEffect to run and then test to check data
        await waitForElementToBeRemoved(() => getByText(/Fetching data.../i))
        expect(getByText(/Pwaypway/i)).toBeInTheDocument()
        expect(getByText(/Indigenous Person/i)).toBeInTheDocument()
    })
})