## pretty input

- Attributes

```js
placeholder = "placeholder" // placeholder for the input
password = true || false // input type password
show = true || false // show password option
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
if you want to get the value with javascript
```js
document.querySelector('pretty-input#my-element').value
```