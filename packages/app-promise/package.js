Package.describe({
    name: 'app:promise',
    summary: "wrapper for bluebird promise library",
    version: '0.0.1'
});

Package.onUse(function (api) {
    api.versionsFrom(['METEOR@1.2']);

    api.addFiles([
        "promise.js"
    ], 'server');

    api.export('Bluebird', 'server');

});

Npm.depends({
    bluebird: '2.10.2'
});
