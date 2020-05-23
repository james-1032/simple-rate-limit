const stateTracker = [];

/**
 * Class to contain a rate limit status
 */
class stateClass {
    constructor(id, state) {
        this.id = id;
        this.state = state;
    }
}

/**
 * Sets the state contents for a rate limit
 * @param rateLimitID The ID of the rate limiter
 * @param state The new state of the rate limiter
 * @returns {boolean} Was the state updated?
 */
function setState(rateLimitID, state) {
    const found = stateTracker.find(debounce => debounce.id === rateLimitID);
    if (found) {
        found.state = state;
    } else {
        let newDebounce = new stateClass(rateLimitID, state || false);
        stateTracker.push(newDebounce);
    }
    return (found != null);
}

/**
 * Returns the state of a rate limit
 * @param rateLimitID
 * @returns {any|null}
 */
function getState(rateLimitID) {
    const debounce = stateTracker.find(debounce => debounce.id === rateLimitID);
    return (debounce) ? debounce.state : null;
}

/**
 * Removes a rate limit
 * @param rateLimitID The ID of the rate limit
 */
function removeLimit(rateLimitID) {
    let count = 0;
    return stateTracker.forEach(function (debounce) {
        if (debounce.id === rateLimitID) {
            stateTracker.splice(count, 1);
        }
        count++;
    });
}

/**
 * Main rate limit function.
 * @param rateLimitID The ID of the rate limit
 * @param timeout How long until the next request is allowed
 * @returns {boolean} Is a new request allowed?
 */
function limit(rateLimitID, timeout) {
    const state = getState(rateLimitID);
    if (!state) {
        setState(rateLimitID, !state);
        setTimeout(setState.bind(rateLimitID, false), timeout);
        return !state;
    } else {
        return false;
    }
}


// Export Functions
module.exports.limit = limit;
module.exports.removeLimit = removeLimit;
module.exports.getState = getState;
module.exports.setState = setState;
