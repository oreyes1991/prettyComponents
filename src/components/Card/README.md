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