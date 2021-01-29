import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
// import App from "../App"
import {getColors as mockGetColors} from '../api/getColors'

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage colorList={[]}/>);
  
});

jest.mock('../api/getColors')
test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  mockGetColors.mockResolvedValueOnce(
    [
      {code: "#dd9a99", color: "limegreen", id: 1},
      {code: "#dd9a99", color: "limegreen", id: 2},
      {code: "#dd9a99", color: "limegreen", id: 3}
    ]
  )
  render(<BubblePage />)
  expect( await screen.findByText(/bubble/i)).toBeInTheDocument();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading