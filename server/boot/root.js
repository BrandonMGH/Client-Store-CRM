// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  const router = server.loopback.Router();
  const path = require('path')
  router.use(server.loopback.static( 'dist' ));
  router.get('/status', server.loopback.status());
  // router.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, "../../dist/Index.html"));
  // })
  

  server.use(router);
};
