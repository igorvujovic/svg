var Ractive  = require("ractive");
require('ractive-touch');
//window.PinchZoom = require('pinch-zoom-js')
import PinchZoom  from 'pinch-zoom-js'
window.PinchZoom = PinchZoom;
console.log('window.PinchZoom', window.PinchZoom)

Ractive.defaults.isolated=true;
Ractive.prototype.unset = function(keypath){
    var lastDot = keypath.lastIndexOf( '.' ),
        parent = keypath.substr( 0, lastDot ),
        property = keypath.substring( lastDot + 1 );

    this.set(keypath);
    delete this.get(parent)[property];
    return this.update(keypath);
}

console.log('oke')

Ractive.components.Root                    =  require('./Root.html');

var ractive = new Ractive.components.Root({
    el: 'body',
    append: false,
    //data:function() {
    //    return {
    //    }
    //}
});

window.ractive=ractive