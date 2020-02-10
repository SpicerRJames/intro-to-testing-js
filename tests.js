// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should be a defined function', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('say hello jane', function() {
        expect(sayHello()).toBe('Hello, Jane!');
    });
    it('say hello alex', function() {
        expect(sayHello('Alex!')).toBe('Hello, Alex!');
    });
    it('say hello pat', function() {
        expect(sayHello('Pat!')).toBe('Hello, Pat!');
    });
    it('say hello world', function() {
        expect(sayHello("world")).toBe("Hello, World!");
    });
    it('say hello world', function() {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('say hello world', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    });

});