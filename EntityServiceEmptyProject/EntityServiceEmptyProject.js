require.config({
    paths: {
        entityService: "/sitecore/shell/client/Services/Assets/lib/entityservice"
    }
});

define(["sitecore", "jquery", "underscore", "entityService"], function (Sitecore, $, _, entityService) {
    var EntityServiceEmptyProject = Sitecore.Definitions.App.extend({

        filesUploaded: [],

        initialized: function () {
        },

        initialize: function () {

        },


    });

    return EntityServiceEmptyProject;
});