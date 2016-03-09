var plask = null;
try {
    plask = require('plask');
}
catch(e) {

}

module.exports = (plask && plask.SkCanvas) ? true : false;
