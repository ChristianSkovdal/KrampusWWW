Ext.define('OdClient.kr.FrontPage', {
    extend: 'Ext.Container',
    xtype: 'frontpage',

    layout: {
        type: 'vbox',
    },

    cls: 'frontpage',

    flipAll() {

        this.query('tile').forEach((t) => Ext.defer(() => t.setActiveItem(1), getRandomInt(100, 1000)));
        
    },

    listeners: {
        initialize: function (cmp) {

            for (var i = 0; i < 4; i++) {

                let col = cmp.add({
                    xtype: 'container',
                    flex: 1,
                    layout: 'hbox'
                });

                for (var j = 0; j < 4; j++) {
                    col.add({
                        xtype: 'tile',
                    });
                }
            }

            Ext.defer(()=>this.flipAll(), 5000);
        }
    }

});
