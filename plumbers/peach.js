/**
 * Peach - Shared by all the plumbers ;)
 *
 * Model for how the Plumbing pipeline should pass its data
 * Shared between BE and FE.
 * 
 * @property {String} domSelector selector of where to append the html
 * @property {String} html HTML to directly append into the selector
 * @property {Array<String>} css List of CSS files required by the html
 * @property {Array<String>} js List of JS files required, sorted by priority.
 *      This list should be ordered from script that should be loaded first.
 *      Therefore, need to make some dependency management to handle this.
 */
function Peach(domSelector, html, css, js) {
    this.domSelector = domSelector;
    this.html = html;
    this.css = css;
    this.js = js;
}

Peach.prototype.toScriptString = function () {
    var scriptString;
        
};

//Peach.prototype.toScriptNode = function () {

//};

if (module) {
    module.exports = Peach;
}
