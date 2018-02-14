Ext.define('OdClient.kr.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    control: {
        'backtile': {
            tileclick: 'tileClick'
        }
    },

    tileStack: [
        {
            xtype: 'menutile'
        },
        {
            xtype: 'htmltile',
            html: '<div style="text-align:center;">Fb/Insta/Twitter</div>'
        },
        {
            xtype: 'htmltile',
            html: '<div style="text-align:center;">Merch</div>'
        },
        {
            xtype: 'htmltile',
            html: '<div style="text-align:center;">This week</div>'
        },
        {
            xtype: 'htmltile',
            html: '<div style="text-align:center;">Events</div>'
        }
    ],

    init() {
        //let store = this.getViewModel().get('bstore');
        //store.load();

        let lng = localStorage.getItem('language') || 'da';
        this.getViewModel().set('currentLocaleCode', lng);
        this.updateLng(lng);
    },

    tileClick(tile) {
        if (this.tileStack.length == 0) {

            let store = this.getViewModel().get('bstore');
            let record = store.getAt(getRandomInt(0, store.count() - 1));
            tile.setActiveItem({
                xtype: 'infotile',
                data: record.getData()
            });

        }
        else {

            let cfg = this.tileStack.shift();
            tile.setActiveItem(cfg);
        }
    },

    menuButtonClick(btn) {
        this.getView().setActiveItem(1);
    },

    onGoHome() {
        location.reload();
    },

    onChangePage(btn) {
        this.lookup('navipage').setActiveItem(btn.pageIndex);
    },

    changeLanguage() {
        let vm = this.getViewModel();
        let lng = vm.get('currentLocaleCode') == 'da' ? 'gb' : 'da';
        vm.set('currentLocaleCode', lng);
        localStorage.setItem('language', lng);
        this.updateLng(lng);
    },

    updateLng(lng) {
        let vm = this.getViewModel();
        vm.set('currentLocaleName', lng == 'da' ? 'GB' : 'DK');

        Ext.Ajax.request({
            url: `/assets/kr/${lng}.json`,
            scope: this,
            success: function (response) {
                vm.set('language', JSON.parse(response.responseText));
            }
        });

    }
});
