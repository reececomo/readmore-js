# readmore-js
Simple "Read More" plugin for HTML5 projects

Simply add the "read-more" class to your HTML object, and a "prompt" sub-element to expand the content:

    <div class="read-more">
        <!-- Content Here -->
        <p>My example content</p>
        <p>Lorem ipsum...</p>
        
        <p class="prompt">
            <a class="button" href="#">Read More</a>
        </p>
    </div>

### Sample Demo

Here is an example using Bootstrap classes: [View Demo](https://rawgit.com/reececomo/readmore-js/master/demo.html)

https://rawgit.com/reececomo/readmore-js/master/demo.html

### Bigger Previews
    <div class="read-more big-preview">
        <!-- 2x bigger preview window -->
        
        <span class="prompt">Close</span>
    </div>

### Auto-shrink
If the content is smaller than the preview window, then the read-more prompt will automatically be disabled.
