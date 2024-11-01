import React from "react";
import {render} from "@testing-library/react";
import UserSignUpPage from "./UserSignUpPage";


describe("UserSignUpPage", () => {
    describe("Layout", () => {
        it("has header of Sign Up", () => {
            const { container } = render(<UserSignUpPage />);
            // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
            const header = container.querySelector('h1');
            expect(header).toHaveTextContent("Sign Up");
        })
    });
});