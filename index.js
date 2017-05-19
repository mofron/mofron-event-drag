/**
 * @file mofron-event-mousedrag/index.js
 * @author simpart
 */

/**
 * @class mofron.event.Drag
 * @brief drag event for mofron component
 */
mofron.event.Drag = class extends mofron.Event {
    
    constructor (fnc, prm) {
        try {
            super();
            this.name('Drag');
            this.prmOpt(
                ('function' === typeof fnc) ?
                {'handler' : new mofron.Param(fnc, prm)} : fnc
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    eventConts (tgt_dom) {
        try {
            var evt_func = this.handler();
            tgt_dom.attr({
                draggable : "true"
            });
            tgt_dom.getRawDom().addEventListener('drag',function() {
                try {
                    if (null != evt_func[0]) {
                        evt_func[0](evt_func[1]);
                    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            },false);
            
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.event.drag = {};
module.exports = mofron.event.Drag;
