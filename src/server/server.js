import fs from 'fs'
import path from 'path'
import handlebars from 'handlebars'
import React from 'react'
import Hapi from '@hapi/hapi'
import ReactDom from 'react-dom/server'
import {setPath} from 'hookrouter'
import App from '../App'

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  // eslint-disable-next-line global-require
  await server.register(require('@hapi/inert'))

  server.route({
    method: 'GET',
    path: '/main.js',
    // statusCode":404,"error":"Not Found","message":"Not Found"

    handler: (request, h) => {h.file(path.join(process.cwd(), 'dist', 'main.js'))
      // setPath(request.path)
      // const pathInnerHTML = path.join(process.cwd(), 'dist', 'index.html')
      // const template = handlebars.compile(fs.readFileSync(pathInnerHTML, 'utf8'))
      // const result = ReactDom.renderToString(<App/>)
      // const page = template({
      //   content: result
      // })
      // return page;
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();