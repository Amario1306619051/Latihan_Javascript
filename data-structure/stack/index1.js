class TextEditor {
    constructor() {
        // TODO: answer here
        this.data = []
        this.top = -1
        this.memory = []
    }

    write(c) {
        // TODO: answer here
        this.top += 1
        return this.data.push(c)
    }

    read() {
        // TODO: answer here
        let ayo = this.data.join("")
        return ayo
    }

    undo() {
        if (this.data.length > 0){
            this.memory.push(this.data[this.top])
            this.top -= 1
            return this.data.pop()
        }
    }
    
    redo() {
        // TODO: answer here
        if(this.memory.length > 0){
            this.top += 1
            let bisa = this.memory[this.memory.length - 1]
            this.memory.pop()
            return this.data.push(bisa)
        }
        else{
            this.top += 0
        }

    }
}

