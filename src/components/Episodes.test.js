import '@testing-library/jest-dom';
import Episodes from './Episodes';
import React from 'react';
import { render } from "@testing-library/react";


describe('Episodes Component', () => {
    it("Should render episodes", () => {
        const episodes = [{
            id: 1,
            season: 1,
            number: 1,
            name: "cool",
            summary: "cool guy kyle",
            runtime: 2
        },{
            id: 2,
            season: 1,
            number: 2,
            name:  "hell",
            summary: "brimstone",
            runtime: 100
        }]
        const {getByText} = render(<Episodes episodes={episodes}/>)
        expect(getByText(/cool guy kyle/i)).toBeInTheDocument()
        expect(getByText(/brimstone/i)).toBeInTheDocument()
    })

})