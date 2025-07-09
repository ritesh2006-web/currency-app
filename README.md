# Currency Converter

A modern, responsive currency converter web app built with **React**, **Vite**, and **Tailwind CSS**. Instantly convert between currencies using real-time exchange rates from the [ExchangeRate-API](https://www.exchangerate-api.com/).

![Currency Converter Screenshot](https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg)

---

## Features

- 🌐 **Live Currency Conversion:** Get up-to-date exchange rates for dozens of currencies.
- 🔄 **Swap Currencies:** Instantly swap "from" and "to" currencies with a single click.
- 🎨 **Modern UI:** Clean, glassmorphic interface styled with Tailwind CSS and a beautiful background image.
- ⚡ **Fast & Lightweight:** Built with Vite for instant reloads and fast builds.
- 🛡️ **Custom React Hooks:** Clean separation of logic using a custom hook for fetching rates.

---

## Tech Stack

- **React** (with Hooks)
- **Vite** (for fast development and builds)
- **Tailwind CSS** (utility-first styling)
- **ExchangeRate-API** (for real-time currency rates)

---

## Project Structure

```
currency-convert/
├── public/
│   └── exchange.png           # Swap icon
├── src/
│   ├── components/
│   │   └── Main.jsx           # InputBox component for currency input
│   ├── Hooks/
│   │   └── currencyFunction.js# Custom hook for fetching currency rates
│   ├── App.jsx                # Main app logic and layout
│   ├── index.css              # Tailwind CSS and custom styles
│   └── main.jsx               # React entry point
├── .env                       # API key for ExchangeRate-API
├── package.json
└── README.md
```

---

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/currency-convert.git
cd currency-convert
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Set Up Your API Key

- Register at [ExchangeRate-API](https://www.exchangerate-api.com/) and get your free API key.
- Create a `.env` file in the root directory:

```
VITE_API_KEY=your_actual_api_key_here
```

### 4. Start the Development Server

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

---

## Usage

- Enter the amount and select the currencies to convert.
- Click **Convert** to see the result.
- Use the swap button to quickly switch between "from" and "to" currencies.

---

## Customization

- **Add More Currencies:** Edit the `currencyOptions` in `Main.jsx` or use all available from the API.
- **Change Background:** Update the `bgImage` URL in `App.jsx`.
- **Styling:** Modify `index.css` or use Tailwind utility classes for further customization.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Credits

- [ExchangeRate-API](https://www.exchangerate-api.com/)
- [Pexels](https://www.pexels.com/) for the background image
- [React](https://react.dev/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/)

---

> Made with ❤️ by Ritesh Puri
