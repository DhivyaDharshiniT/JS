//set example1----without array brackets first characters only gets printed
a=new Set("AIADMK","BLP","DMK")
console.log(a)

//set example2--------using array brackets everything is printed
a=new Set(["AIADMK","BJP","DMK"])
console.log(a)

//adding a value in set
a.add("Congress")
a.add("AIADMK")
console.log(a)

for ( value of a) {
    console.log(value)
    
}
for(key in a){
    console.log(key)
}
