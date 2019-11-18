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