﻿require.config({
    paths: {
        entityService: "/sitecore/shell/client/Services/Assets/lib/entityservice"
    }
});

define(["sitecore", "jquery", "underscore", "entityService"], function (Sitecore, $, _, entityService) {
    var EntityServiceEmpty = Sitecore.Definitions.App.extend({

        initialized: function () {
        },

        initialize: function () {
        },

    });

    return EntityServiceEmpty;
});