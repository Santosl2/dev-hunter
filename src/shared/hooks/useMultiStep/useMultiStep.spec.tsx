import { MultiStepProvider } from "@/shared/contexts";
import { act, renderHook } from "@testing-library/react";
import { useMultiStep } from ".";

describe("useMultiStep", () => {
  const mockedSteps = {
    stepOne: {
      seniority: 1,
      skills: [1, 2],
    },
    stepTwo: {
      bio: "Test",
    },
  };

  const render = () =>
    renderHook(() => useMultiStep(), {
      wrapper: MultiStepProvider,
    });

  beforeAll(() => {
    jest.spyOn(Storage.prototype, "setItem");

    Storage.prototype.setItem = jest.fn(() => JSON.stringify(mockedSteps));
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it("should be able to reset step", async () => {
    const { result } = render();

    act(() => {
      result.current.nextStep();
    });

    expect(result.current.currentStep).toBe(2);

    act(() => {
      result.current.reset();
    });

    expect(result.current.currentStep).toBe(1);
  });

  it("should be able back to prev step", async () => {
    const { result } = render();

    act(() => {
      result.current.nextStep();
    });

    expect(result.current.currentStep).toBe(2);

    act(() => {
      result.current.prevStep();
    });

    expect(result.current.currentStep).toBe(1);
  });

  it("should be able to setStorage", async () => {
    const { result } = render();

    act(() => {
      result.current.insertStepStorage({});
    });

    expect(window.localStorage.setItem).toHaveBeenCalled();

    jest.resetAllMocks();
  });

  it("should be able go to correct Step when user has localStorage data", async () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockedSteps));

    const { result } = render();

    expect(result.current.currentStep).toBe(2);
  });
});
