# MarketPulse - Interactive Stock Tracker

MarketPulse is an ambitious responsive front-end stock-market dashboard created for the September 2026 CLA Final Project submission. It is designed as a fictional financial-technology product for retail investors who want a single interface for market monitoring, watchlists and paper portfolio tracking.

## Business Details

**Business:** MarketPulse Financial Technologies (concept project)

**Product:** A browser-based market dashboard for retail investors and students learning about equity markets.

**Target users:** Individual investors, finance students and beginners who want a clean dashboard for following Indian equities without placing real trades.

## Website Goals

- Present a professional stock-market dashboard rather than a basic static webpage.
- Let users search and inspect a universe of major Indian stocks.
- Visualise price history using a custom HTML Canvas chart.
- Allow users to create and persist a personal watchlist.
- Provide a paper portfolio that calculates current value and profit/loss.
- Demonstrate responsive interface design across desktop, tablet and mobile.
- Demonstrate practical JavaScript state management and browser LocalStorage.

## Major Features

- Responsive dashboard/sidebar layout
- Search by stock symbol or company name
- Interactive 1D, 1W, 1M and 3M price chart using the Canvas API
- Simulated market ticks and manual refresh interaction
- Gainers/losers switcher
- Persistent watchlist using LocalStorage
- Paper portfolio with quantity, average cost, current value and P&L calculations
- Sector filters and sorting in the market explorer table
- Dark/light theme toggle with persistent preference
- Responsive mobile navigation
- Representative NIFTY 50, SENSEX and BANK NIFTY index cards
- Accessible labels, semantic HTML and keyboard-compatible controls

## Design and Tool Decisions

The interface uses a dark financial-dashboard aesthetic with information-dense cards, restrained accent colours and responsive CSS Grid/Flexbox layouts. The project uses only HTML5, CSS3 and vanilla JavaScript, with no framework and no API key. This keeps the submission portable and easy to run while still demonstrating substantial front-end logic. Google Font Inter improves readability. HTML Canvas is used for custom chart rendering, and LocalStorage persists user watchlists, portfolio holdings and theme preference.

## Important Data Note

All prices are representative sample data and subsequent movements are simulated locally for demonstration. MarketPulse is not connected to an exchange and does not provide investment advice.

## Source Code Repository

https://github.com/rangakartik21-star/cla-retake-web-project

## Live Website Preview

https://raw.githack.com/rangakartik21-star/cla-retake-web-project/main/index.html

## Files

- `index.html` - dashboard structure and interface
- `styles.css` - responsive layout, themes and visual styling
- `script.js` - stock data, charting, watchlist, portfolio, filters and interactions
- `README.md` - business details, goals and technical documentation
