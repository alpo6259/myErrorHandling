`use strict`;

function myPow(base, exponent) {
  //
  if (!Number.isInteger(base, exponent)) {
    throw new RangeError("must be integer value");
  }

  if (typeof base !== "number" && exponent !== "number") {
    throw new TypeError("must be number");
  }

  if (base < 0 || !Number.isSafeInteger(base)) {
    throw new Error("must be not negative safe int value");
  }

  //
  if (exponent === 0) return 1;
  if (exponent < 0) return myPow(base, exponent + 1) / base;
  if (exponent > 0) return myPow(base, exponent - 1) * base;
}

try {
  console.log(" :>> ", myPow(3, 4));
} catch (err) {
  console.log("err :>> ", err);
}

console.log("end script ");
