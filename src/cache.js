class Cache{
    constructor() {
        this.cache = {}
    }
    add(key, value, access = 1){
        this.cache[key] = [value, access]
    }
    get(key){
        if (this.cache[key][0] == null || this.cache[key][0] == undefined || this.cache[key][1] < 1)
            return null
        else{
            this.cache[key][1] -= 1
            return this.cache[key]
        }
    }
    stat(key){
        return `key: ${key}; value: ${this.cache[key][0]}; access: ${this.cache[key][1]}`
    }
    statistic(){
        const res = []
        for(let x in this.cache)
            res.push(this.stat(x))
        return res
    }
}
export {Cache}