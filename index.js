const fs = require("fs");

const loader = require("./assemblyscript/lib/loader");
const buffer = fs.readFileSync(__dirname + "/build/optimized.wasm");
const wasmModule = loader.instantiateBuffer(buffer, {
    env: {
        // you may want to set specific environment settings here
        // like table or memory settings
    }
});

// You can use all types of TypedArray subclasses
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

const calcNums = new Int32Array([1, 2, 3, 4, 5, 0x7fffffff]);

console.log('Input array data to be summed:', calcNums);

// the pointer points to the memory location in WASM context
const ptr = wasmModule.newArray(calcNums);

// call the WASM module to execute the processing
wasmModule.sum(ptr);

// make sure you provide the same TypedArray subclass constructor like in line 15
const expectedSummedArray = wasmModule.getArray(Int32Array, ptr);

// directly access the processed array
console.log('expectedSummedInt32Array', expectedSummedArray);

// free memory in WASM context
wasmModule.freeArray(ptr);