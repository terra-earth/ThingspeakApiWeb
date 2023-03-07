
## Run Locally

Clone the project

```bash
  git clone https://github.com/Arcfoz/Wokwi
```

Go to the project directory

```bash
  cd Wokwi
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Usage/Examples
Pada folder /public/script.js ubahlah api_url sesui dengan Channel ID dan Read API Keys pada Thingspeak

```javascript
const api_url = "https://api.thingspeak.com/channels/<ChannelID>/feeds.json?api_key=<ReadAPIKeys>&results=1";
```

