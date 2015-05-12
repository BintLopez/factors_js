##Factors & Caching

First, I approached the problem with the main goal of getting the desired input ==> output. The initial solution can be viewed by opening index.html in the browser. The app.js file does all the work for this.

#1. Caching
An implementation that uses caching is in the app_cache.js file.

#2. Performance
Could perhaps make this more performant by changing approach altogether. In current implementation, the is_factor function takes the arguments in a specific order. Could perhaps cut down on calculations by caching the result for is_factor(num1, num2) and using that to implicitly know the result of is_factor(num2, num1).

#3. Reversing functionality
I think reversing functionality would not change how the program is caching, though it would change the logic determining what values are set to the keys in the cache.

#Observation
When caching to localStorage, my array was stored out of order. 