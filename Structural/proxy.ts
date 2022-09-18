// Replacing target object with a proxy object
// Reactivity system via VUe.JS
// Let's create some data with object we call original one
const original = { name: 'Serge'};
// Proxy object will intercept the calls to data and update UI whenver data changed. Vue handles that by replacing original object with proxy
// It takes original object as 1st argument and handlres as second, 
// where we override property get and set methods to trigger side effects along with it's base functionality
const reactive = new Proxy(original, {
    get(target, key) {
        console.log('tracking this: ', key)
        return target[key];
    },
    // Inside of set we might tell the frameqork to rerender than use the Reflect to update the data on the original object
    set(target, key, value) {
        console.log('updating UI');
        return Reflect.set(target, key, value);
    }
});
// End user can now work with proxy as with original object triggering the effects of proxy
reactive.name; // Outputs: 'tracking name'
reactive.name = 'Pavel'; // Outputs: 'updating UI'