# 🌳 AjitTree - Your Personal Link Tree

A beautiful, modern, and fully customizable Linktree clone built with Next.js and Tailwind CSS. Create your personal link hub with stunning animations and a responsive design.

![AjitTree Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=AjitTree+Preview)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- 🌙 **Dark/Light Mode** - Automatic theme switching with user preference persistence
- 📱 **Fully Responsive** - Works perfectly on all devices and screen sizes
- ⚡ **Fast & Lightweight** - Built with Next.js for optimal performance
- 🎭 **Customizable** - Easy to personalize colors, links, and profile information
- 🔗 **Multiple Link Types** - Support for social media, websites, email, and more
- 🔍 **Smart Search** - Real-time search with text highlighting and keyboard shortcuts
- 📊 **Analytics Ready** - Easy to integrate with tracking services
- 🚀 **Deploy Ready** - One-click deployment to Vercel, Netlify, or any platform

## 🛠 Tech Stack

- **Framework:** Next.js 15 (React 18)
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **Icons:** Custom SVG icons and Emojis
- **Deployment:** Vercel (recommended)

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js 18+ installed on your machine.

### Installation

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your AjitTree!

## 🎨 Customization

### Profile Configuration

Edit `src/data/config.js` to customize your profile:

```javascript
export const profileConfig = {
  name: "Your Name",
  username: "@yourusername",
  bio: "Your bio description here",
  avatar: "/your-avatar.jpg", // Place your avatar in the public folder
  backgroundGradient: "from-purple-400 via-pink-500 to-red-500",
  theme: "dark" // "light" or "dark"
};
```

### Adding/Editing Links

Modify the `socialLinks` array in `src/data/config.js`:

```javascript
export const socialLinks = [
  {
    id: 1,
    title: "Your Website",
    url: "https://yourwebsite.com",
    icon: "🌐", // Any emoji or you can use custom icons
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
    description: "Visit my website"
  },
  // Add more links...
];
```

### Available Color Gradients

Choose from these predefined gradients or create your own:

- `bg-gradient-to-r from-blue-500 to-blue-600` - Blue
- `bg-gradient-to-r from-purple-500 to-purple-600` - Purple  
- `bg-gradient-to-r from-pink-500 to-pink-600` - Pink
- `bg-gradient-to-r from-green-500 to-green-600` - Green
- `bg-gradient-to-r from-red-500 to-red-600` - Red
- `bg-gradient-to-r from-yellow-500 to-yellow-600` - Yellow
- `bg-gradient-to-r from-gray-700 to-gray-900` - Dark Gray

### Adding Your Avatar

1. Place your avatar image in the `public` folder (e.g., `public/avatar.jpg`)
2. Update the `avatar` path in `src/data/config.js`
3. Recommended size: 400x400px or higher, square aspect ratio

## 🔍 Search Feature

### How It Works

- **Automatic Display**: Search bar appears when you have more than 3 links
- **Real-time Filtering**: Links are filtered as you type
- **Text Highlighting**: Search matches are highlighted in yellow
- **Multiple Fields**: Searches through link titles, descriptions, and URLs

### Keyboard Shortcuts

- **Ctrl+F** (or **Cmd+F** on Mac): Focus the search input
- **/** (forward slash): Quick focus search input
- **Escape**: Clear search and blur input

### Search Tips

- Search is case-insensitive
- Partial matches are supported
- Use specific keywords for better results
- Clear search to see all links again

## 📁 Project Structure

```
ajittree/
├── public/
│   ├── favicon.ico
│   └── avatar.jpg          # Your profile picture
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles and animations
│   │   ├── layout.js       # App layout and metadata
│   │   └── page.js         # Main page component
│   ├── components/
│   │   ├── ProfileCard.js  # Profile section component
│   │   ├── LinkButton.js   # Individual link button component
│   │   └── ThemeToggle.js  # Dark/light mode toggle
│   └── data/
│       └── config.js       # Site configuration
├── package.json
└── README.md
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ajittree)

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `out` folder to [Netlify](https://netlify.com)

### Other Platforms

AjitTree works on any platform that supports Next.js applications:
- AWS Amplify
- GitHub Pages (with GitHub Actions)
- Railway
- Render

## 📊 Analytics Integration

To add analytics tracking, modify the `handleClick` function in `src/components/LinkButton.js`:

```javascript
const handleClick = () => {
  // Google Analytics example
  gtag('event', 'click', {
    event_category: 'Social Link',
    event_label: link.title
  });
  
  window.open(link.url, '_blank', 'noopener noreferrer');
};
```

## 🎭 Custom Themes

Create custom themes by modifying the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --background-color: #your-color;
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Contact me on social media (links in the app!)

---

**Made with ❤️ by [Ajit Kumar](https://github.com/yourusername)**

⭐ Don't forget to star this repo if you found it helpful!
