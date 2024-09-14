# npm install rodina-parser

## What is this?

#### The library is needed for simplified access to information on the user Authorization token

# Quick guide

####First, we need to get your Authorization token.

####Follow the steps:

```
1. Log in to your personal account https://rodina-rp.com/
After successful authorization, you will be taken to the "Profile"
2. Go to the Developer Tools by pressing F12
3. Select Fetch/XHR and refresh the page
4. Select one of the files that appear (rodina, admin, account)
Information about the request will appear.
5. Go to "Request Headers" and copy Authorization
Example: "Bearer jeHj..."
```

# Example

```js
const Rodina = require("rodina-parser'");
const rrp = new Rodina({ authToken: 'Bearer jeHj...' });

rrp.getAllSongs().then((x) => console.log(x));
```

### Result

```json
[
    {
        "id": 59184,
        "artistName": "Unknown",
        "songName": "Don't tell your mom",
        "duration": 174,
        "timeAdd": 1726513347
    }
]
```

# Methods list

```
.getAllInfo() // Will return all json
.getAllSongs() // Returns an array with music
.getAllRating() // Returns an array of ratings
.getAllNews() // Returns an array of updates/news on the server
.getAllServers() // Returns an array with information about all the project servers
.getInventory() // Returns an array with the user's inventory
.getTransport() // Returns an array with the user's transport
.getSkills() // Returns an array with the user's game skills
.getRatingFirst() // Returns the top rating
```

# Alert

## The token is reset after logging into your personal account
