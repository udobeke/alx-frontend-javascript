export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat();

  return {
    [Symbol.iterator]: function* () {
      for (const employee of employees) {
        yield employee;
      }
    },
  };
}
