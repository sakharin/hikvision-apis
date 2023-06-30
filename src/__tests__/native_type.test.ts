import { nativeType } from '@ISAPI';

describe('nativeType', () => {
  test.each([
    { text: 'true', value: true },
    { text: 'false', value: false },
  ])('"$text" should become $value', ({ text, value }) => {
    const native = nativeType(text);
    expect(typeof native).toBe('boolean');
    expect(native).toEqual(value);
  });

  test.each(
    Array.from({ length: 11 }, (_, i) => i - 5).map((elem) => ({
      text: `${elem}`,
      value: elem,
    })),
  )('"$text" should become $value', ({ text, value }) => {
    const native = nativeType(text);
    expect(typeof native).toBe('number');
    expect(native).toEqual(value);
  });

  test.each(
    ['a', 'of', 'NaN', '""', "''"].map((elem) => ({ text: elem, value: elem })),
  )('"$text" should become $value', ({ text, value }) => {
    const native = nativeType(text);
    expect(typeof native).toBe('string');
    expect(native).toEqual(value);
  });
});
