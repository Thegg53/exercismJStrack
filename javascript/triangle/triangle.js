export class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    kind() {
        if (this.a <= 0 || this.b <= 0 || this.c <= 0 || (this.a > this.b + this.c || this.b > this.a + this.c || this.c > this.b + this.a)) throw new Error();
        if (this.a == this.b || this.a == this.c) return this.b == this.c ? 'equilateral' : 'isosceles';
        else if (this.b == this.c) { return 'isosceles' }
        else return 'scalene'
    }
}