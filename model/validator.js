sap.ui.define([
    '../lib/L'
], function (L) {
    'use strict'

    return {
        isEmptyString: L.both (L.isEmpty) (L.isString)
    }
})