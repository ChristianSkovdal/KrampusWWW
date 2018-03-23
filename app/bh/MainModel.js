Ext.define('OdClient.bh.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {

        language: null,
        currentLocaleName: null,
        currentLocaleCode: 'gb'
        
    },

    stores: {

        bstore: {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/assets/bh/html/{currentLocaleCode}/b.json',

                reader: {
                    type: 'json',
                }
            }

        }
    }
});
