class Stack {
    constructor() {
        // TODO: answer here
        this.data = [];
        this.size = 10;
        this.top = -1;
      }
    
      push(elemen) {
        // TODO: answer here
        if (this.top == this.size - 1) {
          throw "stack overflow";
        }
        this.data[(this.top += 1)] = elemen;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);
stack.push(11)
console.log(stack)          