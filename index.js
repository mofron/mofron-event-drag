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
            tgt_dom.attr({
                draggable : "true"
            });
            
            this.addType('drag');
            for (let tp_idx in this.m_type) {
                this.addType(tp_idx);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    addType (type) {
        try {
            if ('string' !== typeof type) {
                if ( ('object' === typeof type) && (undefined !== type[0]) ) {
                    for (let tp_idx in type) {
                        this.addType(type[tp_idx]);
                    }
                    return;
                }
                throw new Error('invalid parameter');
            }
            if ( ('drag'      !== type) &&
                 ('dragend'   !== type) &&
                 ('dragenter' !== type) &&
                 ('dragexit'  !== type) &&
                 ('dragleave' !== type) &&
                 ('dragstart' !== type) ) {
                throw new Error('invalid parameter');
            }
            if (undefined === this.m_type) {
                this.m_type = {};
            }
            this.m_type[type] = null;
            if (null === this.target()) {
                return;
            }
            this.setType(type);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setType (tp) {
        try {
            if ('string' !== typeof tp) {
                throw new Error('invalid parameter');
            }
            let evt  = this;
            let fnc  = () => {
                try {
                    let evt_cb = evt.handler();
                    if (null != evt_cb[0]) {
                        evt_cb[0](evt.target(), tp, evt_cb[1]);
                    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
            this.target().eventTgt().getRawDom().addEventListener(
                tp,
                fnc,
                false
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.event.drag = {};
module.exports = mofron.event.Drag;
