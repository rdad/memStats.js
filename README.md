memStats.js
========

#### JavaScript Memory Monitor ####

A simple 3 part box that will help monitoring your browser memory.
Using window.performance.memory object (webkit only)

Black box: total memory
Blue box : Allocated memory
Pink box : In use memory

### Usage ###

```javascript
var stats = new memStats();

// Align top-left
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';

document.body.appendChild( stats.domElement );

setInterval( function () {

	// your code goes here

	stats.update();

}, 1000 / 60 );
```

