const {
  getYieldForPlant,
  getYieldForCrop,
  // getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./farm");

//this test may not be altered!
describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };

  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

describe("getYieldForPlant", () => {
  test("Get yield for plant with low sun environment factor", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
      },
    };

    const environmentFactors = {
      sun: "low",
    };
    expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
  });
});

describe("getYieldForPlant", () => {
  test("Get yield for plant with high rain environment factor", () => {
    const pumpkin = {
      name: "pumpkin",
      yield: 30,
      factors: {
        rain: {
          low: -20,
          medium: 0,
          high: -50,
        },
      },
    };

    const environmentFactors = {
      rain: "high",
    };
    expect(getYieldForPlant(pumpkin, environmentFactors)).toBe(15);
  });
});

describe("getYieldForPlant", () => {
  test("Get yield for plant with low wind environment factor which has no influence on yield", () => {
    const apple = {
      name: "apple",
      yield: 25,
      factors: {
        wind: {
          low: 0,
          medium: -30,
          high: -60,
        },
      },
    };

    const environmentFactors = {
      wind: "low",
    };
    expect(getYieldForPlant(apple, environmentFactors)).toBe(25);
  });
});

//this test may not be altered!!
describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, with environment factor sun and rain", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          rain: {
            low: -20,
            medium: 0,
            high: -50,
          },
      },
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    const environmentFactors = {
      sun: "high",
      rain: "low",
    };
    expect(getYieldForCrop(input, environmentFactors)).toBe(36);
  });
});

// describe("getTotalYield", () => {
//   test("Calculate total yield with multiple crops", () => {
//     const corn = {
//       name: "corn",
//       yield: 3,
//     };
//     const pumpkin = {
//       name: "pumpkin",
//       yield: 4,
//     };
//     const crops = [
//       { crop: corn, numCrops: 5 },
//       { crop: pumpkin, numCrops: 2 },
//     ];
//     expect(getTotalYield({ crops })).toBe(23);
//   });

//   test("Calculate total yield with 0 amount", () => {
//     const corn = {
//       name: "corn",
//       yield: 3,
//     };
//     const crops = [{ crop: corn, numCrops: 0 }];
//     expect(getTotalYield({ crops })).toBe(0);
//   });
// });

describe("getCostsForCrop", () => {
  test("Calculate costs for one crop of corn", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getCostsForCrop(input)).toBe(10);
  });

  test("Calculate costs for one crop of pumpkin", () => {
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const input = {
      crop: pumpkin,
      numCrops: 8,
    };
    expect(getCostsForCrop(input)).toBe(8);
  });
});

describe("getRevenueForCrop", () => {
  test("Calculate revenue for crop of corn without environmentfactor", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
      salesPrice: 2,
    };
    expect(getRevenueForCrop(input)).toBe(60);
  });

  test("Calculate revenue for crop of pumpkin without environmentfactor", () => {
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const input = {
      crop: pumpkin,
      numCrops: 8,
      salesPrice: 3,
    };
    expect(getRevenueForCrop(input)).toBe(96);
  });
});

describe("getProfitForCrop", () => {
  test("Calculate profit for crop of corn without environmentfactor", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
      salesPrice: 2,
    };
    expect(getProfitForCrop(input)).toBe(50);
  });
});

describe("getTotalProfit", () => {
  test("Calculate total profit for multiple crops without environmentfactor", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5, salesPrice: 2 },
      { crop: pumpkin, numCrops: 2, salesPrice:  3 },
    ];
    expect(getTotalProfit({crops})).toBe(47);
  });
});