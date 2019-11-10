# Pretty components
    A library like Antd but with webcomponents
# CDN
```html
<script src="https://cdn.jsdelivr.net/gh/oreyes1991/prettyComponents@1.0.1-a/main.js"> </script>
```
## Start dev server
```shell
npm start
```

## Build project
```shell
npm run build
```
# Components
## Buttons
```html
<pretty-button type="primary" value="Primary" onclick="myFunction" size="default"></pretty-button>
```
- Attributes
```js
type = ["primary", "default", "danger", "dashed"] 
//(if not defined is asumed default)
value = "TEXT-INSIDE-BUTTON" 
//(if not defined it come with "value" word)
onclick = "nameOfMyFunction"
size = ["large", "small", "default"] 
//(if not defined default asumed)
```
## pretty dropdown
- Attributes
```js
target = "myTarget" //id of the parent element
onchange = "myFunction" // on change callback
```
- Examples
define a target element where your dropdown can appear
```html
<pretty-button value="DropDown" id="my-target"></pretty-button>
```
define the dropdown component
```html
<pretty-dropdown target="my-target" onchange="changeFunc">
	<div class="p-menu-item">
		1st Menu Item
	</div>
	<div class="p-menu-divider"></div>
	<div class="p-menu-item">
		2nd Menu Item
	</div>
	<div class="p-menu-item" disabled>
		3nd Menu Item
	</div>
</pretty-dropdown>
```
- Notice that target point to the id where it will be spawn.
- Notice that inside our component can be what ever element you wish
- Notice that we provide 2 classes to for the menu items ( item, divider )

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