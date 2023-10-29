function parseCount(value) {
    if (isNaN(Number.parseFloat(value))) {
      throw new Error('Невалидное значение');
    } else return Number.parseFloat(value);
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (err) {
      return err;
    }
  }
  
  
  class Triangle {
    constructor(a, b, c) {
  
      if ((a + b <= c) || (a + c <= b) || (c + b <= a)) {
        throw new Error('Треугольник с такими сторонами не существует');
      } else {
        this.a = a;
        this.b = b;
        this.c = c;
      }
    }
  
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      let p = this.perimeter / 2;
      return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (err) {
      return { get area() { return 'Ошибка! Треугольник не существует' }, get perimeter() { return 'Ошибка! Треугольник не существует' }, }
    }
  
  }
  