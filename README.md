Test project for OKPanda by Sella Rafaeli.

Tech stack is a React FE (based on 'create-react-app' template), using a BE of Node/ExpressJS and Agenda (based on MongoDB) to schedule background tasks, and Postmark to send emails. 

# Setup 
Have MongoDB and NodeJS installed in up-to-date versions. 

$ git clone https://github.com/SellaRafaeli/okpanda-test.git
$ cd okpanda-test && npm i
$ POSTMARK=<your-postmark-token> nodemon server.js 

If you don't set your postmark token, app will work but emails will fail to be sent. 

# Usage

Browse topics; for each topic you may view or set or delete jobs. Each job has a message and payload (both currently strings) and will be sent by default within 1 minute of creating the job. All emails are currently hard-coded to be sent to and from my (Sella's) emails; you should change these to match your domain in Server.js's _sendEmail_ function. 

In development, you can run _npm start_ to develop just the FE. Calls to /api/* will be proxied through the _proxy_ field in package.json to a separate instance of the running BE. When you're done developing, build using _npm run build_ to deploy a compiled bundle into /build (which will be served by ExpressJS).

# Notes

As always in exams and throw-away code, the code itself could be improved - further separated into modules, made more robust with internal and external error-checking and tests, prepared for real deployment (e.g. not hard-wiring Mongo to localhost), a normal UI, and so on. However one must remember that throw-away code is meant to be exactly that - thrown away. :) 