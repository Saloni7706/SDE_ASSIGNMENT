function normalizeCode(code) {
  return code.toUpperCase();
}

function isValidCode(code) {
  if (code.length !== 7) return false;

  // Check first 3 are letters
  for (let i = 0; i < 3; i++) {
    const ch = code[i];
    if (ch < 'A' || ch > 'Z') return false;
  }

  // Check last 4 are digits
  for (let i = 3; i < 7; i++) {
    const ch = code[i];
    if (ch < '0' || ch > '9') return false;
  }

  return true;
}

function processData(data) {
  const totalCodes = data.length;
  const validCodes = [];

  for (let code of data) {
    const normalized = normalizeCode(code);
    if (isValidCode(normalized)) {
      validCodes.push(normalized);
    }
  }

  validCodes.sort();

  return {
    totalCodes,
    validCodes: validCodes.length,
    invalidCodes: totalCodes - validCodes.length,
    normalizedValidCodes: validCodes
  };
}

export { processData }; // ✅ ES module export
