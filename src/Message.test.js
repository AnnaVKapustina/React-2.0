import { render, screen } from '@testing-library/react';
import Message from "./Message"

describe("Message", () => {
    it('matches snapshot online', () => {
        const component = render (<Message autor="Anton" text="Hello" />)

        expect(component).toMatchSnapshot()
    })
    it("should contain message text 'Hello'", () => {

        render(<Message autor="Anton" text="Hello" />)

        const wrapper = screen.getByText(/Hello/i)

        expect(wrapper).toBeInTheDocument()
    })
})