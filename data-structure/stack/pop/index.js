class Stack{
    constructor (){
        this.data = []
        this.top = -1
    }

    push(element){
        this.top += 1
        return this.data.push(element)
    }
    pop(){
        if(this.top == -1){
            throw 'stack underflow'
        }
        else{
            this.top -= 1
            return this.data.pop()
        }
    }
}

const x = new Stack()
x.push('amario')
x.push('fausta')
x.pop()

console.log(x)