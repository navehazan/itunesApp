export default queries => {
  return queries.map(item => {
    return { value: item, label: item };
  });
};
