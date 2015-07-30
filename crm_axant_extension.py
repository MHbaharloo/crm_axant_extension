from openerp.osv import fields, osv

class crm_axant_extension(osv.Model):
    _inherit = "crm.phonecall"

    _columns = {
        'axant': fields.text('Axant'),
    }

    _defaults = {
        "axant": "This is a test",
    }

crm_axant_extension()