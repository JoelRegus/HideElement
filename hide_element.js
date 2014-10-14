/**************************************************
 * Hide Element
 *
 * Remove annoying elements on a page that are
 * blocking your content, like prestitials and
 * newsletter pop ups.
 *
 * Config settings:
 *
 * query: CSS query to find your element.
 *
 * interval: Timer interval in milleseconds.
 *
 * max: Total number of times the script will check
 *      for the element.
 *
 * hideAll: Hide all elements that the query returns.
 *
 * hideIndex: Hide a specific element that the query
 *          returns.
 *
 * @author Joel Regus
 **************************************************/

(function () {
    "use strict";

    var config = {
            query: "#elementId",
            interval: 100,
            max: 100,
            hideAll: false,
            hideIndex: 0
        },

        hideElement = function(element) {
            element.style.display = "none";
        },

        stopTimer = function() {
            clearInterval(findElement);
        },

        findElement = setInterval(function(){
            this.i = this.i || 0;
            this.elements = document.querySelectorAll(config.query);
            this.i++;
            this.len = this.elements.length;

            if (this.i === config.max) {
                stopTimer();
            } else if (this.len > 0) {
                if (config.hideAll) {
                    for (var j = 0; j < this.len; j++) {
                        hideElement(this.elements[j]);
                    }
                } else {
                    hideElement(this.elements[config.hideIndex]);
                }

                stopTimer();
            }
        }, config.interval);
}());

