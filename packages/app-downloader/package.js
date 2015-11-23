Package.describe({
    name: 'app:downloader',
    summary: 'downloads a remote file.',
    version: '0.0.1'
});

Package.onUse(function (api) {
    api.versionsFrom(['METEOR@1.2']);

    api.use([
        "app:promise@0.0.1"
    ]);

    api.addFiles([
        "download.js"
    ], 'server');
});

Package.onTest(function(api) {
    api.versionsFrom("METEOR@1.2");
    api.use([
        'sanjo:jasmine@0.20.2',
        "app:promise@0.0.1"
    ]);


    var files = [
        "download.js",
        "tests/server/download.spec.js"
    ];

    api.addFiles(files, 'server');
});


Npm.depends({
    "download-http": '0.0.4'
});
