<div align="center">
    <img src="/public/images/logo.png" alt="Marvel Next logo" />
    <p>A Next.js application using Marvel API developed for study purposes</p>
</div>

<div align="center">
    <a href="https://marvel-next-mu.vercel.app/">View Demo</a>
</div>

## About

As a fan of all Marvel movies and a student of software development, I decided to apply some of the concepts I have learned so far about Next, React, Third Parties API fetching and Material UI components library. So, play with this website to get some information about your favorite characters from Marvel.

_Attention: In the free usage of Marvel Developer API, I am only able to make 3.000 calls per day, so, if you visit the site and do not work properly, please, check again later, otherwise, create your own developer account at https://developer.marvel.com/, download this repository and use your own keys for the API calls._

## Built with

- [Next.js](https://nextjs.org/)
- [Marvel Developer API](https://developer.marvel.com/documentation/getting_started)
- [Material UI](https://mui.com/pt/)
- [React Query](https://react-query.tanstack.com/)
- [Vercel](https://vercel.com/docs)

## Installation

1. Clone the repo with `git clone https://github.com/gbeserra95/marvel-next.git`

2. Install yarn packages with `yarn install`

3. Create a `.env.local` file and edit the following environment variables:

   - `NEXT_PUBLIC_VERCEL_URL`=http://localhost:3000
   - `API_BASE`=https://gateway.marvel.com/v1/public
   - `PRIVATE_KEY`=[your own private key]
   - `PUBLIC_KEY`=[your own public key]

4. Run `yarn dev`

## License

Distributed under the MIT License.<br>

See `LICENSE.txt` for more information.

## Author

Created by [Gabriel Beserra](https://github.com/gbeserra95).

Find me on [LinkedIn](https://www.linkedin.com/in/-gabrielbeserra/)!

Cheers! 🍻

<div align="right">
    <a href="#">back to top</a>
</div>
