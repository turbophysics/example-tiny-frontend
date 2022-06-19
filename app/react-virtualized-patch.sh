#!/bin/bash
sed -i '' '74d' node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js

echo "declare module '@elyra/canvas';" >> node_modules/@elyra/canvas/dist/common-canvas.d.ts