import { act, renderHook } from "@testing-library/react";
import { useLocalStorage } from ".";

describe("useMultiStep", () => {
  const KEY = "storageTest";

  const FAKE_ITEM = {
    test: "test",
  };

  const mockedSetItem = jest.fn();

  beforeEach(() => {
    jest.spyOn(Storage.prototype, "setItem");
    Storage.prototype.setItem = mockedSetItem;
  });

  const render = () => renderHook(() => useLocalStorage(KEY, {} as any));

  it("should be able to call  localStorage set item", async () => {
    const { result } = render();

    act(() => {
      result.current.setStorage(FAKE_ITEM);
    });

    expect(mockedSetItem).toHaveBeenCalledWith(KEY, JSON.stringify(FAKE_ITEM));
  });
});
