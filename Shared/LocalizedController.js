Ext.define('Shared.LocalizedController', {
    extend: 'Ext.app.ViewController',

    config: {
        assetsPath: '' // /assets/kr
    },

    init() {
        let lng = localStorage.getItem('language') || 'da';
        this.getViewModel().set('currentLocaleCode', lng);
        this.updateLng(lng);
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
            //url: `/assets/kr/${lng}.json`,
            url: `/${this.assetsPath}/${lng}.json`,
            scope: this,
            success: function (response) {
                vm.set('language', JSON.parse(response.responseText));
            }
        });

    }
});
