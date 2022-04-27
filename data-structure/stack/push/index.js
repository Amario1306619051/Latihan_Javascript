class Stack{
    constructor (){
        this.data = []
        this.top = -1
    }

    push(element){
        this.top += 1
        return this.data.push(element)
    }
}

const x = new Stack()
x.push('amario')
x.push('fausta')
console.log(x)