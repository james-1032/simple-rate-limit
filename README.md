# simple-rate-limit

![MIT Licence](https://img.shields.io/badge/licence-MIT-brightgreen.svg?style=flat) ![0 dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat)

Simple rate limiter for JavaScript functions.

## Usage

### limit(rateLimitID, timeout)

Will return `false` if function is being called before the timeout from the previous call has expired. If a debounce does not already exist, one will be created and activated on the first call.

Example: <i>Button action only runs once every 1000ms, no matter how many times the function is called.</i>

```js

button.addEventListener('click', e => {
			if (rateLimitID('myid', 1000)) {
				// Button Action
			}
		}

```

Example: <i>A user can only access the secret once every 5000ms.</i>

```js

function getSecret(requestingUserID) {
	return (limit(requestingUserID, 5000)) ? secretValue : null;
}

```
## 

> The following methods achieve the same result as `limit()` but are split to allow more manual control.

### setState(rateLimitID, state)

Will create or update the state of a rate limit. State is assumed as `false` if not provided.

Example: 

```js

setState('myid', true); // Creates a rate limit with true state.

setState('myid', false); // Changes the state to false.

```

##

### getState(rateLimitID)

Returns the state of a rate limit or `null` if it doesn't exist.

Example: 

```js

setState('myid', true); // Creates a rate limit with true state.

> getState('myid'); // Returns true.

```

##

### removeLimit(rateLimitID)

Returns `true` if a rate limit was removed or `false` if it does not exist.

Example: 

```js

setState('myid', true); // Creates a rate limit with a true state.

> removeLimit('myid'); 

getState('myid'); // Returns null.
```
