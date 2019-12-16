# Pretty components
    A library like Antd but with webcomponents
# CDN
```html
<script src="https://cdn.jsdelivr.net/gh/rebelstackio/prettyComponents@1.0.2-a/main.js"> </script>
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

## pretty tag

- Attributes

```
value = "display value" // the displayed value
close = set type to closable and display a X to delete the tag
onclose = callback on close event
selectable = set type to selectable and change active status
onselect = callback on select event
loading = true || false // show loading animation
icon = font awesome class // will display incon at the left
```
- Examples
Default tag
```html
<pretty-tag value="Basic Tag"></pretty-tag>
```
Tag with icon
```html
<pretty-tag value="Tag with icon" icon="fas fa-biking"></pretty-tag>
```
Selectable tag
```html
<pretty-tag selectable onselect="onSelect" class="selected" value="Tag 1"></pretty-tag>
```
Closeable tags
```html
<pretty-tag value="Close me" close onclose="onClose"></pretty-tag>
```
loading animation
```html
<pretty-tag value="Loading Tag" loading></pretty-tag>
```
if you want to get the value with javascript
```js
document.querySelector('pretty-tag#my-tag').name
```

## Pretty Card

- Attributes

```
title="card title"
description="card description"
avatar="media@img url"
bordered=boolean // make a border box
```
- Examples
Default card
```html
<pretty-card title="Title" description="Description"></pretty-card>
```
Card with avatar
```html
<pretty-card title="Card with avatar" avtar="./dummy.png"></pretty-card>
```
Card with content
```html
<pretty-card title="Card with content">
    <span>content</span>
    <span>content</span>
    <span>content</span>
</pretty-card>
```
Bordered card
```html
<pretty-card title="Bordered" bordered></pretty-card>
```

## Pretty Collapse

- Attributes

```
bordered=boolean
```
## Pretty Collapse item

- Attributes

```
title="panel title"
expanded=boolean
```
- Examples
Basic Expand
```html
<pretty-collapse>
    <pretty-collapse-item title="Collapse title">
        TEXT
    </pretty-collapse-item>
    <pretty-collapse-item title="Collapse title">
        TEXT
    </pretty-collapse-item>
</pretty-collapse>
```
Borderless
```html
<pretty-collapse borderless>
    <pretty-collapse-item title="Collapse title">
        TEXT
    </pretty-collapse-item>
    <pretty-collapse-item title="Collapse title">
        TEXT
    </pretty-collapse-item>
</pretty-collapse>
```
Nested
```html
<pretty-collapse>
    <pretty-collapse-item title="Nested collapse">
        <pretty-collapse>
            <pretty-collapse-item title="Nested 1">
                TEXT
            </pretty-collapse-item>
            <pretty-collapse-item title="Nested 2">
                TEXT
            </pretty-collapse-item>
        </pretty-collapse>
    </pretty-collapse-item>
    <pretty-collapse-item title="Collapse title">
        TEXT
    </pretty-collapse-item>
</pretty-collapse>
```

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