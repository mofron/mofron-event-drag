/**
 * @file mofron-event-drag/index.js
 * @brief drag event for mofron
 *        <handler parameter><br>
 *         - component: event target component object<br>
 *         - event: "mousemove" event object<br>
 *         - mixed: user specified parameter<br>
 * @author simpart
 */
const mf = require("mofron");

mf.event.Drag = class extends mf.Event {
    
    /**
     * initialize drag event
     * 
     * @param (array/object) array: event function [function,parameter]
     *                       object: event option
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name("Drag");
            this.prmMap("handler");
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * drag event contents
     * 
     * @param (component) event target component
     * @type private
     */
    contents (tgt_dom) {
        try {
            let evt_obj = this;
            tgt_dom.getRawDom().addEventListener(
                "mousedown",
                (evt) => { evt_obj.is_mdown(true); },
                false
            );
            
            tgt_dom.getRawDom().addEventListener(
                "mouseup",
                (evt) => { evt_obj.is_mdown(false); },
                false
            );
            
            tgt_dom.getRawDom().addEventListener(
                "mousemove",
                (evt) => {
                    if (true === evt_obj.is_mdown()) {
                        evt_obj.execHandler(evt);
                    }
                },
                false
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * current mouse status
     *
     * @param (boolean) true: mouse down
     *                  false: mouse up
     * @type private
     */
    is_mdown (prm) {
        try {
            return this.member("is_mdown", "boolean", prm, false);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.event.Drag;
/* end of file */
