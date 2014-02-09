/**
 * Luigi - Front-end plumber
 *
 * Plumber responsible for handling the pipes on the FE side
 *
 * @property {Peach} peach Peach Model for plumber view
 */
function Luigi() {
    this.peaches = [];

    this.firstStage = [];
}

Luigi.prototype.addPeach = function (peach) {
    this.peaches.push(peach);
    this.insertDom(peach);
    this.loadCss(peach);
};


/**
 * Insert the HTML content into the domSelector specified
 * @returns {Node} Node that was appended, null if selector failed
 */
Luigi.prototype.insertDom = function (peach) {
    var node = document.querySelector(this.domSelector);
    if (node) {
        //We do this incase you want to keep appending to body
        var containerNode = document.createElement('div');
        containerNode.innerHTML = this.peach.html;
        return node.appendChild(containerNode);
    } else {
        return null;
    }
};

Luigi.prototype.loadCss = function (peach) {
    var head = document.getElementByTagName('head');

    //Use some sort of async lib here.
    //Fire an event when # done loaded + # errors = total

    for(var i = 0; i < this.peach.css.length; i++) {
        var cssUrl = this.peach.css[i];

        var linkNode = document.createElement('link');
        linkNode.onload = onLinkLoad;

        linkNode.rel = 'stylesheet';
        linkNode.type = 'text/css';
        linkNode.href = cssUrl;

        head.appendChild(linkNode);
    }
};

Luigi.prototype.loadJs = function (peach) {
    var body = document.getElementByTagName('body');

    for(var i = 0; i < this.peach.js.length; i++) {
        var scriptNode = document.createElement('script');
        scriptNode.src = this.peach.js[i];
        body.appendChild(scriptNode);
    }
};

window.nodeplumber.luigi = new Luigi();
