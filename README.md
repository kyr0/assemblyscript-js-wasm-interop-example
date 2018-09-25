### AssemblyScript JS/WASM TypedArray interop example

This repo quickly demonstrates how to pass data
between JS and WASM context in an efficient way.

#### Prerequisites

Make sure you have at least:

    nodejs v10.7.0
    npm 6.1.0
    
installed.

#### Setup
   
It is important to use the latest revision (atm):
    
    $> git clone https://github.com/AssemblyScript/assemblyscript.git
    $> cd assemblyscript
    $> npm install
    $> npm link
    
#### Compile WASM

Just call:

    npm run asbuild

...to compile `assembly/index.ts` to `build/*`.

#### Run

Just call:

    node index.js
   
To run the WASM module.