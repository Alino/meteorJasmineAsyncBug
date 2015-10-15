@downloadFile = (url, destination) ->
  return new Bluebird((fulfill, reject) ->
    downloadHTTP = Npm.require('download-http')
    downloadHTTP(url, destination, (error) ->
      if error then reject(error)
      else fulfill("#{destination}#{url.split("/").pop().split('?').shift()}")
    )
  )
