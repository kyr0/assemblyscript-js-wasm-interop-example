import "allocator/tlsf";
export { memory };

export function sum(arr: Int32Array): i32 {
    let v = 0;
    for (let i = 0, k = arr.length; i < k; ++i) {
        arr[i] += arr[i];
    }
    return v;
}
