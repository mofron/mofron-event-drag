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
            for (let tp_idx in this.m_type) {
                this.setType(tp_idx);
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
                 ('dragover'  !== type) &&
                 ('dragleave' !== type) &&
                 ('dragstart' !== type) ) {
                throw new Error('invalid parameter');
            }
            if (undefined === this.m_type) {
                this.m_type = {};
            }
            this.m_type[type] = true;
            if (null === this.target()) {
                return;
            }
            this.setType(type);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    delType (tp) {
        try {
            if ('string' !== typeof tp) {
                if ( ('object' === typeof tp) && (undefined !== tp[0]) ) {
                    for (let tp_idx in tp) {
                        this.delType(tp[tp_idx]);
                    }
                    return;
                }
                throw new Error('invalid parameter');
            }
            if (undefined === this.m_type) {
                this.m_type = {};
            }
            if (undefined === this.m_type[tp]) {
                return;
            }
            this.m_type[tp] = false;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    getType () {
        try {
            if (undefined === this.m_type) {
                return null;
            }
            let ret_val = new Array();
            for (let tp_idx in this.m_type) {
                if (true === this.m_type[tp_idx]) {
                    ret_val.push(tp_idx);
                }
            }
            return (0 === ret_val.length) ? null : ret_val;
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
                    let evt_type = evt.getType();
                    if (null === evt_type) {
                        return;
                    }
                    let evt_cb = evt.handler();
                    for (let tp_idx in evt_type) {
                        if (tp === evt_type[tp_idx]) {
                            if (null != evt_cb[0]) {
                                evt_cb[0](evt.target(), tp, evt_cb[1]);
                            }
                        }
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
