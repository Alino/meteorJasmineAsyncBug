Package.describe({
    name: 'app:downloader',
    summary: 'downloads a remote file.',
    version: '0.0.1'
});

Package.onUse(function (api) {
    api.versionsFrom(['METEOR@1.2']);

    api.use([
        "coffeescript",
        "app:promise@0.0.1"
    ]);

    api.addFiles([
        "download.coffee"
    ], 'server');
});

Package.onTest(function(api) {
    api.versionsFrom("METEOR@1.2");
    api.use([
        'sanjo:jasmine@0.20.2',
        'coffeescript',
        "app:promise@0.0.1"
    ]);


    var files = [
        "download.coffee",
        "tests/server/download.spec.js"
    ];

    api.addFiles(files, 'server');
});


Npm.depends({
    "download-http": '0.0.4'
});
