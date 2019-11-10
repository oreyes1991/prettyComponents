## pretty input

- Attributes

```
placeholder = "placeholder" // placeholder for the input
password = Define input type as passworrd, if the value is "show" display a toggler
loading = true || false // show loading animation
```
- Examples
Default input
```html
<pretty-input placeholder="Default input"></pretty-button>
```
Password input with show option
```html
<pretty-input placeholder="Password with show option" password show></pretty-input>
```
password input without show option
```html
<pretty-input placeholder="Password with show option" password show></pretty-input>
```
loading animation
```html
<pretty-input placeholder="Loading input" loading></pretty-input>
```
if you want to get the value with javascript
```js
document.querySelector('pretty-input#my-element').value
```