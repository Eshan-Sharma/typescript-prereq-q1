import { base58ToWallet, walletToBase58 } from "./base58-convertor";

describe("testing base58 to wallet conversion", () => {
  test("conversion1", () => {
    expect(
      base58ToWallet(
        "gdtKSTXYULQNx87fdD3YgXkzVeyFeqwtxHm6WdEb5a9YJRnHse7GQr7t5pbepsyvUCk7VvksUGhPt4SZ8JHVSkt"
      )
    ).toEqual(
      new Uint8Array([
        34, 46, 55, 124, 141, 190, 24, 204, 134, 91, 70, 184, 161, 181, 44, 122,
        15, 172, 63, 62, 153, 150, 99, 255, 202, 89, 105, 77, 41, 89, 253, 130,
        27, 195, 134, 14, 66, 75, 242, 7, 132, 234, 160, 203, 109, 195, 116,
        251, 144, 44, 28, 56, 231, 114, 50, 131, 185, 168, 138, 61, 35, 98, 78,
        53,
      ])
    );
  });
});

describe("testing wallet to base58 conversion", () => {
  test("conversion2", () => {
    expect(
      walletToBase58([
        34, 46, 55, 124, 141, 190, 24, 204, 134, 91, 70, 184, 161, 181, 44, 122,
        15, 172, 63, 62, 153, 150, 99, 255, 202, 89, 105, 77, 41, 89, 253, 130,
        27, 195, 134, 14, 66, 75, 242, 7, 132, 234, 160, 203, 109, 195, 116,
        251, 144, 44, 28, 56, 231, 114, 50, 131, 185, 168, 138, 61, 35, 98, 78,
        53,
      ])
    ).toEqual(
      "gdtKSTXYULQNx87fdD3YgXkzVeyFeqwtxHm6WdEb5a9YJRnHse7GQr7t5pbepsyvUCk7VvksUGhPt4SZ8JHVSkt"
    );
  });
});
