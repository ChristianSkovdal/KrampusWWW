Ext.define('OdClient.kr.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {

        btn1: 'dasdas',
        language: null,
        currentLocaleName: null,
        currentLocaleCode: 'gb'
        
    },

    stores: {

        bstore: {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/assets/kr/html/{currentLocaleCode}/b.json',

                reader: {
                    type: 'json',
                }
            }

        }
    }
});
