# readmore-js
Simple "Read More" jQuery plugin for HTML5 projects

Simply add the "read-more" class to your HTML object, and a "prompt" sub-element to expand the content:

#### jQuery
```javascript
// Global with defaults
$.readMore();

// Selector with defaults
$(".myObjects").readMore();
```

#### HTML
```html
<div class="read-more">
    <!-- Content Here -->
    <p>My example content</p>
    <p>Lorem ipsum...</p>

    <p class="prompt">
        <a class="button" href="#">Read More</a>
    </p>
</div>
```

### Sample Demo

Here is an example using Bootstrap classes: [View Demo](https://rawgit.com/reececomo/readmore-js/master/demo.html)

### Options
- selector\*: The jQuery selector whose content to shrink 
- expandTrigger: The jQuery selector that expands the shrunken content
- previewHeight: The max height (in px/pt) to display when shrunk
- fadeColor1: Transparent background color (fully transparent)
- fadeColor2: Opaque background color (fade to this color)

```javascript
// Global defaults
$.readMore({
    selector: ".read-more",
    expandTrigger: ".prompt",
    previewHeight: 120,
    fadeColor1: "rgba(255,255,255,0)",
    fadeColor2: "rgba(255,255,255,1)"
});

// Selector defaults
$(".read-more").readMore({
    expandTrigger: ".prompt",
    previewHeight: 120,
    fadeColor1: "rgba(255,255,255,0)",
    fadeColor2: "rgba(255,255,255,1)"
});
```
