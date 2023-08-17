# Desert Rock Sports
---
New website to replace a very aged and broken one.

Its very text dense for just about all the information climbers visiting the area would possibly want. Also has a store/local news section.

## Technologies
* React
* SASS
* Python - Scripts for grabbing WX data, saving to DB, getting from DB (Bottle Server API endpoint), clearing old DB data
  Using a normal WX API service can run into issues (and costs) if your site gets mobbed with visitors. Instead, 24 times a day, I'm grabbing WX data from a free API and saving it to a MySQL DB. Then I grab this wx data from my DB, using a self-made API endpoint for it. This way no matter the visitor count, I wont hit the free API usage limits and incur costs, which would have happened pretty quickly otherwise because hourly historical weather data going back several days uses up the free API queries pretty quick. Compiling my own copy of historial hourly to use is free.
* Bash - shell scripts run by cron to schedule the python scripts, make sure Bottle Server is up, retry connections, log errors, etc...

### Node Packages
* react-router
* react-bootstrap
* styled-components - may remove, not sure yet
* react-responsive-carousel
* date-fns
* formik
* plotly.js
* react-plotly.js
* react-animated-css
* react-awesome-loaders
* react-icons
* react-images
* react-photo-gallery
* react-zoom-pan-pinch
* video-react
* html-react-parser
* swr - React Hooks for Data Fetching

### Python
* mysql-connector-python
* requests
* python-decouple
* bottle (Bottle Server)
* datetime

### Other notes
* Many things are in .gitignore....
* News items are meant to be updated infrequently and manually. May add CRUD functionality to update them in the future... However, as the original site news **never** updated, me doing it a few times per year manually, where I might also need to do other small changes anyways, seems very managable and still a huge improvement.
