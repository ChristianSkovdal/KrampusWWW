Ext.define('OdClient.kr.BCntr', {
    extend: 'Ext.Container',
    xtype: 'bcntr',

    scrollable: true,

    style:'background:darkgray;',

    layout: {
        type: 'float',
    },

    config: {
        url: false
    },

    updateUrl(url) {
        if (url) {
            _url = url;
            let me = this;

            if (!this.store) {
                this.store = Ext.create('Ext.data.Store', {
                    proxy: {
                        type: 'ajax',
                        url: url,
                        reader: {
                            type: 'json',
                        }
                    }
                });
            }

            this.store.getProxy().setUrl(url);
            this.store.load({
                callback: (records) => {

                    records.forEach(rec => {
                        let tile = me.down('#' + rec.getId());
                        if (tile == null) {
                            me.add({
                                itemId: rec.getId(),
                                xtype: 'btile',
                                data: rec.getData()
                            });
                        }
                        else {
                            tile.applyData(rec.getData());
                        }

                    });
                }
            });
        }
    },
});
