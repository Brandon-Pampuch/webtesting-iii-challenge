import { render, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/react/cleanup-after-each"; // function at the top
import "jest-dom/extend-expect"; // added functionality (disabled)
import Display from "./Display";

describe("display proper results", () => {
  describe("describe proper colors", () => {
    it("displayed and green", () => {
        const display = render(<Display closed={false} locked={false}/>)
        display.getByText('Open') 
        display.getByText('Unlocked') 

        expect(display.getByText('Open').className).toContain('green-led')

        expect(display.getByText('Unlocked').className).toContain('green-led')

    });
    it("have a green unlock red closed", () => {
        const display = render(<Display closed={true} locked={false}/>)
        display.getByText('Closed') 
        display.getByText('Unlocked') 

        expect(display.getByText('Closed').className).toContain('red-led')

        expect(display.getByText('Unlocked').className).toContain('green-led')

    });
    it("have a green unlock red closed", () => {
        const display = render(<Display closed={true} locked={true}/>)
        display.getByText('Closed') 
        display.getByText('Locked') 

        expect(display.getByText('Closed').className).toContain('red-led')

        expect(display.getByText('Locked').className).toContain('red-led')

    });
  });
});
