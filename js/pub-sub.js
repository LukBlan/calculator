const pubSub = (function() {
  let events = {}

  function emit(eventName, data) {
    events[eventName].forEach(handler => handler(data));
  }

  function subscribe(eventName, handler) {
    events[eventName] = events[eventName] || [];
    events[eventName].push(handler);
  }

  return {emit, subscribe}
})()