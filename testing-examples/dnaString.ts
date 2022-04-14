export const dnaString = (s: string) => {
  const cannonicalBases = ["C", "T", "A", "G"];
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const currentCharacter = s[i];
    if (cannonicalBases.includes(currentCharacter)) {
      result += currentCharacter;
    }
  }
  return result;
};
