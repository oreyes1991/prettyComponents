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