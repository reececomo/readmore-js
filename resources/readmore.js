/*
 * Read More Plugin (jQuery)
 *  by Reece Como
 *  9 Jan 2018
 *
 * Based on: "Text Fade Out / Read More Link | CSS-Tricks"
 * https://css-tricks.com/text-fade-read-more/
 *
 * Usage:
 *  1. $.readMore( options );
 *  2. $(".my-elements").readMore( options );
 */
(function ($) {
    // Global method
    jQuery.readMore = function (options) {
        // Default selector
        const settings = $.extend({
            selector: ".read-more"
        }, options);

        // Run read more
        $(settings.selector).readMore(options);
    };

    // Selector method
    $.fn.readMore = function (options) {
        // This is the easiest way to have default options.
        const settings = $.extend({
            // These are the defaults.
            previewHeight: 120,
            expandTrigger: ".prompt",
            collapseTrigger: '.collapse',
            fadeColor1: "rgba(255,255,255,0)",
            fadeColor2: "rgba(255,255,255,1)"
        }, options);

        // Run this on the container
        return this.each(function () {
            // Get elements
            const $container = $(this);
            const $expand = $container.find(settings.expandTrigger);
            const $collapse = $container.find(settings.collapseTrigger);

            // Get the height of the container
            const totalHeight = $container[0].scrollHeight;

            // Check if total height is too big
            if (totalHeight <= $container.height()) {
                // Does not require read-more
                $container.css('max-height', 'none');
                $expand.hide();
                $collapse.hide();
            } else {
                // Set the preview window height
                $container.css('max-height', settings.previewHeight + 'px');
                $expand.css('padding-top', (settings.previewHeight / 2) + 'px');
            }

            // Set the fade color
            $expand.css({
                'background-image':
                    'linear-gradient(to bottom, ' + settings.fadeColor1 + ', ' + settings.fadeColor2 + ')'
            });

            $expand.on('click', function () {
                // Set height to prevent instant jump-down when max height is removed
                $container
                    .css({ "max-height": 99999 });

                $expand.fadeOut();
                $collapse.fadeIn(); // fade out prompt
                return false; // prevent default jump-down action
            });

            $collapse.on('click', function () {
                // Set the preview window height
                $container.css('max-height', settings.previewHeight + 'px');
                $expand.css('padding-top', (settings.previewHeight / 2) + 'px');
                // show button expand and hide buttons collapse
                $expand.fadeIn();
                $collapse.fadeOut(); // fade out prompt
                // scrolls to 20px above element

                $container.scrollIntoView(true);
                return false; // prevent default jump-down action
            })
        });
    };

}(jQuery));
