import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// AAA = Arrange Component, action to test, assertion on action
describe("Home", () => {

    it("should have collection heading", () => {
        render(<Home />)
        const textWord = screen.getByRole('heading', {
            name: /collection/i
        })
        expect(textWord).toBeInTheDocument()
    });



})