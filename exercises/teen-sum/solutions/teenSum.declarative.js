function teenSum(a, b) {
  const [aIsTeen, bIsTeen] = [a >= 13 && a <= 19, b >= 13 && b <= 19];

  return aIsTeen || bIsTeen ? 19 : a + b;
}
