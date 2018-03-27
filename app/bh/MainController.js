Ext.define('OdClient.bh.MainController', {
    extend: 'Shared.LocalizedController',
    alias: 'controller.bhmain',

    assetsPath: 'assets/bh',

    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onRouteChange'
            },
        },
    },

    control: {
        'button': {
            tap: 'toolbarButtonClick'
        }
    },

    routes: {
        ':page': 'onRouteChange',
        ':beer/:name': 'loadBeer'
    },

    onRouteChange: function (id) {
        this.setCurrentPage(id);
    },

    loadBeer(name) {

    },

    setCurrentPage(hash) {

    },

    toolbarButtonClick: function (btn) {
        debugger;
        var href = btn.config.href;
        this.redirectTo(href);
    }

    // listen: {
    //     global: {
    //         orientationchange: (screen) => {
    //             let navi = Ext.ComponentQuery.query('#navibar')[0];
    //             //debugger;
    //             //navi.items.items[0].hide(screen.orientation.angle!=90);
    //         }
    //     }
    // },


});
