const payload = '{"a":2,"b":3}';
try {
  const data = JSON.parse(payload); // safe—no code execution
} catch (e) {
}
