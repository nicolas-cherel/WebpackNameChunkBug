# WebpackNameChunkBug
Reproduce chunk names mishandling in Chunk.integrate() webpack call

In the following build, the chunk name `ren` should have kept `index` and output `index.js`.

```
✔ ~/Coding/Fiddling/WebpackNameChunk [master L|…4]
11:21 $ ./node_modules/.bin/webpack --config pack.js
Hash: f0c7fdffff1519d7a85b
Version: webpack 4.12.0
Time: 160ms
Built at: 2018-06-12 11:22:15
 Asset      Size  Chunks             Chunk Names
ren.js  3.43 KiB       0  [emitted]  ren
[0] ./other.js 2.05 KiB {0} [built]
[1] ./index.js 58 bytes {0} [built]
[2] multi ./index 28 bytes {0} [built]

```
