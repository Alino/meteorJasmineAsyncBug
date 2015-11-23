downloadFile = function(url, destination) {
  return new Bluebird(function(fulfill, reject) {
    var downloadHTTP;
    downloadHTTP = Npm.require('download-http');
    return downloadHTTP(url, destination, function(error) {
      if (error) {
        return reject(error);
      } else {
        return fulfill("" + destination + (url.split("/").pop().split('?').shift()));
      }
    });
  });
};
