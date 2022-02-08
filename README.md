This is a [Next.js](https://github.com/vercel/next.js), [MUI](https://github.com/mui/material-ui) Spotify Web API component using [SWR](https://github.com/vercel/swr) for (SSR) Server-side Rendering. Shows a current playing song on Spotify.

**Demo:** [http://next-js-spotify-ssr-mui-component.vercel.app](http://next-js-spotify-ssr-mui-component.vercel.app)

## Sreenshots

<img src="https://tomsmits.nl/assets/component1.png">

<img src="https://tomsmits.nl/assets/component2.png">

## Getting Started

First, install all dependencies.

```bash
npm install
# or
yarn install
```

Second, rename **.env.example** to **.env** and set all the Spotify web API tokens.

```shell
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
```

As last run the development server and let the magic happen!

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
