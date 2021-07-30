const Employee = require('../lib/Employee');

describe("Employee class", () => {
  it("can be instantiated", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
    expect(employee instanceof Employee).toBe(true);
  })

  it('should have a name property that can be set on instanstiation', () => {
    const employee = new Employee('Dave');
    expect(employee.name).toBe('Dave');
  })

  it('should have a id property that can be set on instanstiation', () => {
    const employee = new Employee('Dave', 1);
    expect(employee.id).toBe(1);
  })

  it ('should have an email property that can be set on instanstiation', () => {
    const employee = new Employee('Dave', 1, 'Dave@gmail.com');
    expect(employee.email).toBe('Dave@gmail.com');
  })

  it ('should have a getName() function that can be called after instanstiation', () => {
    const employee = new Employee('Dave', 1, 'Dave@gmail.com');
    expect(employee.getName(1)).toBe('Dave');
  })

  it ('should have a getId() function that can be called after instanstiation', () => {
    const employee = new Employee('Dave', 1, 'Dave@gmail.com');
    expect(employee.getId('Dave')).toBe(1);
  })


});