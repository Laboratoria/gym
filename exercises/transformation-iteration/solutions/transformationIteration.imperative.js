function transform(source, target) {
  const result = [source];

  for (let i = 0; i < source.length; i++) {
    if (source[i] !== target[i]) {
      result.push(target.slice(0, i + 1) + source.slice(i + 1));
    }
  }

  return result;
}
