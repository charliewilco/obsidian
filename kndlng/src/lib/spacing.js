// Represent the Spacing Scale from Obsidian.css as an object to make it reusable
// This makes it agnotic of whether it's being passed as a value to margin or padding

function spacing(x = '1', y = 'rem') {
  return {
    one: `${x / 4 + y}`,
    two: `${x / 2 + y}`,
    three: `${x + y}`,
    four: `${x * 2 + y}`,
    five: `${x * 2.4 + y}`,
    six: `${x * 4 + y}`
  };
}

export default spacing;
