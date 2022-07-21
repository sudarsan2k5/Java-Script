// nn bb ss u -> primitive in js
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("577") + BigInt("3");
let e = "sudarsan";
let f = Symbol("This is a symble");
let g = undefined;
console.log(a, b, c, d, d, e, f, g);
console.log(typeof e)  // ->This is represent which type of primitive,

// Object in Js
const item = {"sudarsan": true, 
                "ragu": false, 
                "harry": 56, 
                "ronal": undefined
            };
console.log(item["ragu"]);