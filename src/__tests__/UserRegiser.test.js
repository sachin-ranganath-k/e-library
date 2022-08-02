import { render } from "@testing-library/react";
import UserRegister from "../components/UserRegister";

describe("User Register Component", () => {
  it("should render User Register component", () => {
    render(<UserRegister />);
  })
})