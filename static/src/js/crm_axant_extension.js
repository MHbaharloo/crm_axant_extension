openerp.crm_axant_extension = function (instance, local) {
	var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

    local.print = function() {
        window.print();
    }

    instance.web.client_actions.add('crm_axant_extension.printPage', 'instancer.crm_axant_extension.print');
}



