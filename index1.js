function merge(a1,a2) {
    x1=[]
    m1=a1.length
    m2=a2.length
    for (let i = 0; i < m1; i++) {
        x1.push(a1[i])
    }
    for (let i = 0; i < m1; i++) {
        for (let j = 0; j < m2; j++) {
            if( a1[m1-1-i] == a2[j]){
                a1.splice(m1-i-1,1)
                break
            }
        }
    }
    for (let i = 0; i < m2; i++) {
        for (let j = 0; j < m1; j++) {
            if( a2[m2-1-i] == x1[j]){
                a2.splice(m2-i-1,1)
                break
            }
        }
    }
    t=a1.concat(a2)
    return t
}
a1=[1,2,"a"]
a2=[1,3,"b"]
t=merge(a1,a2)
console.log(t)