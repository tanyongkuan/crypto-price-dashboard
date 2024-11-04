# Crypto Price Dashboard

A cryptocurrency price dashboard built with Next.js, TypeScript and Tailwind CSS. This project provides a real-time summary of the top tracked cryptocurrencies via CoinGecko API.

## Links

- [Live Website](https://crypto-price-dashboard-kappa.vercel.app/ 'Visit Crypto Dashboard')

## Deployment

This project is deployed on Vercel for seamless and fast hosting, providing an optimized user experience.

[![Vercel Status](https://vercelbadge.vercel.app/api/tanyongkuan/crypto-price-dashboard)](https://vercel.com/tanyongkuan/crypto-price-dashboard)

## Features

- **24-Hour Price Range Visualization**: Display min, max, and current prices for each cryptocurrency, using a dynamic bar.
- **Responsive and Accessible Layout**: Built with responsive design principles to ensure an optimal experience on mobile and desktop.
- **Error Handling**: Errors are displayed in a centralized banner for visibility.
- **Customizable Component Design**: Components are built to be reusable and modular, allowing flexibility and easy maintenance.

## Tech Stack

- **Next.js 15**: A React framework for server-rendered applications, optimized with Turbopack for fast builds.
- **React 19** for building reusable, interactive UI components.
- **TypeScript**: A strongly typed programming language that builds on JavaScript for improved type safety and developer productivity.
- **Tailwind CSS**: A utility-first CSS framework for rapid, responsive design.
- **Lucide Icons**: A collection of open-source icons used in the dashboard for UI elements.
- **Zod**: A TypeScript-first schema declaration and validation library for runtime validation of data.
- **Prettier with Tailwind Plugin**: Prettier formats code consistently, with a Tailwind plugin for ordering Tailwind classes.
- **ESLint with Prettier Config**: Ensures code quality and consistency, integrated with Prettier for formatting rules.

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v118.18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/tanyongkuan/crypto-price-dashboard.git
   cd crypto-price-dashboard
   ```

2. Clone this repository:
   ```bash
   npm install
   ```

### Running the Project

To start the project in development mode:

```bash
   npm run dev
```

This command starts the development server on http://localhost:3000.

## Project Structure

- **`/components`**: Contains all reusable UI and utility components.
- **`/app`**: Contains Next.js pages, including the main crypto dashboard page.
- **`/lib`**: Data fetching, utility and formatting functions.
- **`/types`**: Typescript types and interfaces.

## Design Decisions

- **Modular Components**: Components like `MinMaxBar` and `CryptoCard` accept props (e.g., `formatter`, `label`) for flexible data display, enabling them to be reused across the application.
- **Client-Side Only Features**: Interactivity such as hover animations and real-time updates require `"use client"` in specific components (e.g., `CryptoCard`, `MinMaxBar`).
- **Centralized Error Display**: Errors encountered during data fetching are shown at the top of the dashboard for easy user visibility.
- **Internal API route to call CoinGecko API**: Improve API security by hiding CoinGecko API key and sensitive information when calling it on data refresh during Client Side Rendering (CSR)

## Assumptions

- **Predefined Cryptocurrencies**: The list of cryptocurrencies is predefined on environment variables.
- **Values For Pricing Listing**: To retrieve Cryptocurrency name, Current price in USD and Percentage change in price over the last 24 hours via `/simple/price`
- **Values For Cryptocurrencies Details**: To retrieve Current price, 24-hour high and low prices via `/coins/${id}`. The market price retrieved is different from `/simple/price`
- **Automatic Data Refresh**: The dashboard automatically refreshes every 2 minutes to update prices. This interval is configurable in the `DataRefresher` component.
- **Error Handling**: If there’s an error fetching data, it’s assumed that showing a single error banner in the header will provide sufficient feedback to users.
- **Dashboard Layout**: Dashboard layout is for visual purpose therefore not all the functions will work.

## About Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tanyongkuan/)

## License

This project is open-source and available under the MIT License.
