Test project for OKPanda by Sella Rafaeli.

<img src='http://i.imgur.com/n4PlfvO.png'/>

Tech stack is a React FE (based on 'create-react-app' template), using a BE of Node/ExpressJS and Agenda (based on MongoDB) to schedule background tasks, and Postmark to send emails. 

# Setup 

Prereqs: Have MongoDB and NodeJS installed in up-to-date versions. 

$ git clone https://github.com/SellaRafaeli/okpanda-test.git

$ cd okpanda-test && npm i 

$ PORT=3005 POSTMARK=<your-postmark-token> nodemon server.js #run BE on specific port, with specific postmark token.

$ npm start #run FE in dev mod 

$ npm run build #build FE; now accessible in prod mode from BE 

You may alternatively set your postmark token in .env; also you can run just the FE in dev mode using _npm start_. 

If you don't set your postmark token, app will work but emails will not be sent. 

# Usage

Browse topics; for each topic you may view or set or delete jobs. Each job has a message and payload (both currently strings) and will be sent by default within 1 minute of creating the job. All emails are currently hard-coded to be sent to and from my (Sella's) emails; you should change these to match your domain in Server.js's _sendEmail_ function. 

In development, you can run _npm start_ to develop just the FE. Calls to /api/* will be proxied through the _proxy_ field in package.json to a separate instance of the running BE. When you're done developing, build using _npm run build_ to deploy a compiled bundle into /build (which will be served by ExpressJS).

# Notes

As always in exams and throw-away code, the code itself could be improved - further separated into modules, made more robust with internal and external error-checking and tests, prepared for real deployment (e.g. not hard-wiring Mongo to localhost), a normal UI, and so on. However one must remember that throw-away code is meant to be exactly that - thrown away. :) 

# Deployment 

You can view and use an example deployment at <a href="http://okpanda2.herokuapp.com">http://okpanda2.herokuapp.com</a>. This version is hard-wired to send jobs after 5 seconds to foo@mailinator.com. Mailinator is a free, publicly-viewable email service, so you can see the emails sent here: <a href="https://www.mailinator.com/inbox2.jsp?public_to=foo#/#public_maildirdiv">https://www.mailinator.com/inbox2.jsp?public_to=foo#/#public_maildirdiv</a>.

<img src='http://i.imgur.com/rG9Nyo7.png'/>