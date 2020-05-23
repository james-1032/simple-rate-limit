# simple-rate-limit

![MIT Licence](https://img.shields.io/badge/licence-MIT-brightgreen.svg?style=flat) ![0 dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat)

Simple rate limiter for JavaScript functions

## Usage

### debounce(id, timeout)

Will return `false` if function is being called before the timeout from the previous call has expired. If a debounce does not already exist, one will be created and activated on the first call.

Example: <i>Button action only runs once every 1000ms, no matter how many times the function is called.</i>

```js

button.addEventListener('click', e => {
			if (debounce('myid', 1000)) {
				// Button Action
			}
		}

```

Example: <i>The secret will only be returned once every 5000ms.</i>

```js

function getSecret {
	return (debounce('getsecret', 5000)) ? secretValue : null;
}

```
## 

> The following methods achieve the same result as `debounce()` but are split to allow more manual control.

### setDebounce(id, state)

Will create or update the state of a debounce. State is assumed as `false` if none is given.

Example: 

```js

setDebounce('myid', true); // Creates a debounce with true state.

setDebounce('myid', false); // Changes the state to false.

```

##

### checkDebounce(id)

Returns the state of a debounce or `null` if it doesn't exist.

Example: 

```js

setDebounce('myid', true); // Creates a debounce with true state.

> checkDebounce('myid'); // Returns true.

```

##

### removeDebounce(id)

Returns `true` if a debounce was removed or `false` if it does not exist.

Example: 

```js

setDebounce('myid', true); // Creates a debounce with true state.

> removeDebounce('myid'); 

checkDebounce('myid'); // Returns null.
```
