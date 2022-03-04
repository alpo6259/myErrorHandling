`use strict`;

function myPow(base, exponent) {
  //
  if (!Number.isInteger(base, exponent)) {
    throw new RangeError("value must be integer value");
  }

  if (typeof base !== "number" || typeof exponent !== "number") {
    throw new TypeError("value must be number");
  }

  if (base < 0 || !Number.isSafeInteger(base)) {
    throw new Error(" must be not negative safe int value");
  }

  //
  if (exponent === 0) return 1;
  if (exponent < 0) return myPow(base, exponent + 1) / base;
  if (exponent > 0) return myPow(base, exponent - 1) * base;
}

try {
  console.log(" :>> ", myPow(2, ""));
} catch (err) {
  if (err instanceof RangeError) {
    console.log("RangeError :>> value must be integer value ");
  } else if (err instanceof TypeError) {
    console.log("TypeError :>> value must be number ");
  } else if (err instanceof Error) {
    console.log("Error :>> must be not negative safe int value ");
  }
}

console.log("finish");
