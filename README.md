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

#### Basic Fletcher function to get `json` data, and `blob` in the second snippet:

```js
Fletcher("example.api/data/", "json");
```
```js
Fletcher("example.api/data/", "blob");
```

#### Getting the status code:
```js
Fletcher("example.api/data/", "status");
```

#### Logging the output (using the log parameter):
```js
Fletcher("example.api/data/", "status", "log");
```

#### Assigning Fletcher to a variable:
```js
const data = Fletcher("example.api/data/");
```
