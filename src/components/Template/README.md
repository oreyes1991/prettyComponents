# Pretty Template
## Code Example
```html
<pretty-template styleless src="<SRC or Path to html>">

</pretty-template>
```
## Attributes
```js
src = "<PATH>" //Mandatory
styleless = true || false // Optional, if is set won't render any styles under that path
scriptless = true || false // Optional, if is set won't execute ant script under that path
```

## Notes
- This component is meant to be used in static environments
- If any attribute is changed, will redraw the component, that includes the src attribute
- This component use Fetch, so no CORS allows
- This component has two src type.
  - Path: /folder/, in this mode will fetch a index.html, .css, .js and injected in the DOM. (styleless and scriptless attribute can be applied to avoid load)
  - HTML file: /folder/name.html will only fetch that HTML file if styleless or scriptless is set, will prevent the style tag or script tag
