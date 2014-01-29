/**
 * Luigi - Front-end plumber
 *
 * Plumber responsible for handling the pipes on the FE side
 *
 * @property {Peach} peach Peach Model for plumber view
 */
function Luigi(peach) {
    this.peach = peach;
}

/**
 * Insert the HTML content into the domSelector specified
 * @returns {Node} Node that was appended, null if selector failed
 */
Luigi.prototype.insertContent = function () {
    var node = document.querySelector(this.domSelector);
    if (node) {
        return node.appendChild(this.peach.html);
    } else {
        return null;
    }
};

Luigi.prototype.loadCss = function () {
    var head = document.getElementByTagName('head');
    
    for(var i = 0; i < this.peach.css.length; i++) {
        var cssUrl = this.peach.css[i];
        head.appendChild('<link rel="stylesheet" type="text/css" href="' + cssUrl + '"/>');
    }
};

Luigi.prototype.loadJs = function () {
    var body = document.getElementByTagName('body');

    for(var i = 0; i < this.peach.js.length; i++) {
        var script = document.createElement('script');
        script.src = this.peach.js[i];
        body.appendChild(script);
    }
};

if (module) {
    module.exports = Luigi;
}
