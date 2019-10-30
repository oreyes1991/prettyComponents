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