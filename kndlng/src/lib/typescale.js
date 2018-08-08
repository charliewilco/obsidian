function typescale(x = '1', y = 'rem') {
  return {
    f1: `${x * 3.125}${y}`,
    f2: `${x * 2.5}${y}`,
    f3: `${x * 2.125}${y}`,
    f4: `${x * 1.75}${y}`,
    f5: `${x * 1.5}${y}`,
    f6: `${x * 1.25}${y}`
  };
}

export default typescale;
