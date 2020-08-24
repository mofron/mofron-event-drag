/**
 * @file mofron-event-drag/index.js
 * @brief drag event for mofron
 * ## event function parameter
 *  - component: event target component object
 *  - event: "mousemove" event object
 *  - mixed: user specified parameter
 * @license MIT
 */

module.exports = class extends mofron.class.Event {
    /**
     * initialize drag event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname("Drag");
            /* init config */
	    this.confmng().add("is_mdown", { type: "boolean", init: false });
	    /* set config */
	    if (undefined !== prm) {
                this.config(prm);
            }
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
                        evt_obj.execListener(evt);
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
            return this.confmng("is_mdown", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
