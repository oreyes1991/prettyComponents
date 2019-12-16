## pretty input number

- Attributes

```
size = small || default || large
min = number
max = number
factor = number
```
- Examples
Default input
```html
<pretty-input-number></pretty-input-number>
```
with min || max
```html
<pretty-input-number min="3" max="7"></pretty-input-number>
```
with custom increment factor
```html
<pretty-input-number factor="5"></pretty-input-number>
```
if you want to get the value with javascript
```js
document.querySelector('pretty-input-number#my-element').value
```