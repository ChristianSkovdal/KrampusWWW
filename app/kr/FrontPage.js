Ext.define('OdClient.kr.FrontPage', {
    extend: 'Ext.Container',
    xtype: 'frontpage',

    layout: {
        type: 'vbox',
    },

    cls: 'frontpage',

    flipAll() {
        if (!this.flipped) {
            this.flipped=true;
            this.query('tile').forEach((t) => Ext.defer(() => t.setActiveItem(1), getRandomInt(100, 1000)));    
        }

    },

    listeners: {
        initialize: function (cmp) {

            let width = window.innerWidth;
            let height = window.innerHeight;
            let max1 = max2 = 4;
            if (width <= 768) {
                max1 = max2 = 3;
            }

            if (height < width) {
                max2++;
            }
            else {
                max1++;
            }

            for (var i = 0; i < max1; i++) {

                let col = cmp.add({
                    xtype: 'container',
                    flex: 1,
                    layout: 'hbox'
                });

                for (var j = 0; j < max2; j++) {
                    col.add({
                        xtype: 'tile',
                    });
                }
            }

            Ext.defer(() => this.flipAll(), 5000);
        }
    }

});
