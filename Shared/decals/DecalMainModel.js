/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Shared.decals.DecalMainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.decalmain',

    data: {
        decalsize: 80

    },

    formulas: {
        decalMm: function(get) {
            return get('decalsize')*2;
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
