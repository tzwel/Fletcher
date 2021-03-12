# 🏹 Fletcher
### A simple and fast solution to fetch data with JavaScript
Fletcher.js size - ~350 bytes unminified

## Installation
- Download Fletcher from [the source](https://raw.githubusercontent.com/tzwel/Fletcher/main/src/Fletcher.js)
- Load Fletcher in your project
```html
<script src="path/Fletcher.js"></script>
```


## Usage

#### Check if Fletcher is working
```js
Fletcher("test");
```
Fletcher should log "Fletcher" in the browser's console if it's active.

#### Basic Fletcher function

```js
await Fletcher("example.api/data/");
```
#### Assigning Fletcher to a variable:
```js
const data = await Fletcher("example.api/data/");
```
