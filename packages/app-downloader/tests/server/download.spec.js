describe('createMasterProduct', function() {
  describe('downloadFile', function() {
    it('should download the file to filesystem', function(done) {
      var destination, failTest, passTest, url;
      url = 'https://www.google.sk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
      destination = "" + process.env.PWD;
      passTest = function(downloadPath) {
        expect(downloadPath).toBeDefined();
        return done();
      };
      failTest = function(error) {
        expect(error).toBeUndefined();
        return done();
      };
      return downloadFile(url, destination).then(passTest)["catch"](failTest);
    });

    it('should catch an error if the file is unreachable', function(done) {
      var destination, failTest, passTest, url;
      url = 'https://www.google.sk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.kokotpica';
      destination = "" + process.env.PWD;
      passTest = function(downloadPath) {
        console.log(downloadPath);
        expect(downloadPath).toBeDefined();
        return done();
      };
      failTest = function(error) {
        var e;
        console.log('fail mothafucka');
        console.log(error);
        if (error) {
          e = true;
        }
        expect(e).toBe(true);
        return done();
      };
      return downloadFile(url, destination).then(passTest)["catch"](failTest);
    });
  });
});
