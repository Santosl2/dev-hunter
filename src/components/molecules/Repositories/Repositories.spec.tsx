import { server } from "@/../mocks/msw";
import { emptyHandlers } from "@/../mocks/msw/emptyHandlers";
import { customRender } from "@/shared/tests/customRender";
import { screen } from "@testing-library/react";
import { Repositories } from "./Repositories";

describe("<Repositories/>", () => {
  it("must be appear loading message when data is loading", async () => {
    customRender(<Repositories user="mfilyp3" />);

    expect(screen.getByText("Carregando repositórios...")).toBeInTheDocument();
  });

  it("should be able to render all users repos correctly", async () => {
    customRender(<Repositories user="Santosl2" />);

    expect(await screen.findAllByTestId("repository")).not.toHaveLength(0);
  });

  it("should be able to render no results when user doesnt have repositories", async () => {
    server.use(...emptyHandlers);

    customRender(<Repositories user="Test" />);

    expect(
      await screen.findByText("Usuário não possui repositórios ainda.")
    ).toBeInTheDocument();
  });
});
