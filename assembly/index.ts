import "allocator/tlsf";
export { memory };

export function sum(arr: Int32Array): i32 {
    let v = 0;
    for (let i = 0, k = arr.length; i < k; ++i) {
        arr[i] += arr[i];
    }

    // please note that this will return the latest value
    // not the TypedArray or the memory location ptr ;)
    // You can use the mutated TypedArray data in JS without
    // returning anything here... in fact, the value returned
    // here is ignored in JS context in this example (index.js)
    return v;
}
