function count(str) {
  return Array.from(str).reduce(
    (counts, char) => Object.assign(counts, { [char]: (counts[char] || 0) + 1 }), {},
  );
}
