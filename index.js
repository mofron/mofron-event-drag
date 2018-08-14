/**
 * @file mofron-event-mousedrag/index.js
 * @author simpart
 */
const mf = require('mofron');
/**
 * @class mofron.event.Drag
 * @brief drag event for mofron component
 */
mf.event.Drag = class extends mf.Event {
    
    constructor (po, p2) {
        try {
            super();
            this.name('Drag');
            this.prmMap('handler', 'type');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (tgt_dom) {
        try {
            let evt_obj = this;
            tgt_dom.getRawDom().addEventListener(
                this.type(),
                () => {
                    try {
                        evt_obj.execHandler();
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                false
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_type) ? null : this.m_type;
            }
            /* setter */
            if ( ('string' !== typeof prm) ||
                 ( ('drag'      !== prm) &&
                   ('dragend'   !== prm) &&
                   ('dragenter' !== prm) &&
                   ('dragexit'  !== prm) &&
                   ('dragover'  !== prm) &&
                   ('dragleave' !== prm) &&
                   ('dragstart' !== prm) ) ) {
                throw new Error('invalid parameter');
            }
            this.m_type = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.event.Drag;
/* end of file */
