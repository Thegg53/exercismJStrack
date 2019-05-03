export class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    kind() {
        if (this.a == this.b || this.a == this.c) {
            return this.b == this.c ? 'equilateral' : 'isosceles'
        } else if (this.b == this.c) { return 'isosceles' }
        else return 'scalene'
        // return 'equilateral'
    }
}