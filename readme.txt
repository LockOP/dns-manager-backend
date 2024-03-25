npm init
npm i express dotenv cors


// for vercel //
1. npm install -g vercel
2. vercel login // to run vercel cli
3. module.exports = app; add to index.js file
4. add vercel.json file in root directory with following text
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@now/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}


