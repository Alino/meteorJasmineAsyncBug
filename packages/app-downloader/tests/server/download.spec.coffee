describe 'createMasterProduct', ->
  describe 'downloadFile', ->
    it 'should download the file to filesystem', (done) ->
      url = 'https://www.google.sk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
      destination = "#{process.env.PWD}"

      passTest = (downloadPath) ->
        expect(downloadPath).toBeDefined()
        done()

      failTest = (error) ->
        expect(error).toBeUndefined()
        done()

      downloadFile(url, destination)
      .then(passTest)
      .catch(failTest)

    it 'should catch an error if the file is unreachable', (done) ->
      url = 'https://www.google.sk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.kokotpica'
      destination = "#{process.env.PWD}"

      passTest = (downloadPath) ->
        console.log downloadPath
        expect(downloadPath).toBeDefined()
        done()

      failTest = (error) ->
        console.log 'fail mothafucka'
        console.log error
        if error then e = true
        expect(e).toBe true
        done()

      downloadFile(url, destination)
      .then(passTest)
      .catch(failTest)
