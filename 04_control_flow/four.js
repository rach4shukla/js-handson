// for in for Objects


const myObject ={
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}` );  
    }

const programming = ["js", "cpp", "rb", "java", "py"]

for (const key in programming) {
    console.log(programming[key]); // output is key
}

const map = new Map()
map.set('IN', "India")
map.set('CAN', "CANADA")
map.set('FR', "FRANCE")
map.set('IN', "India")

// for in loop in map

for (const key in map) {
    console.log(key);
    
} // map is not iterable therefore cannot be used in loop