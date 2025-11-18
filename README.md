# EDIGHT (PTY) - EDGAR BRIGHT GROUP

A stunning, modern website for EDGAR BRIGHT GROUP, a visionary IT solutions company based in Pretoria, Gauteng. Built with advanced scroll animations and attention-grabbing design.

## Features

- **Advanced Scroll Animations**: Fade-in, slide-in, parallax effects, floating elements, and counter animations
- **Modern Design**: Custom gradient theme using company colors (#D1C7C1, White, #D05353, #181C28)
- **Multi-Page Structure**: 5 comprehensive pages (Home, About, Services, Training, Contact)
- **Fully Responsive**: Mobile-first design with hamburger menu and adaptive layouts
- **Performance Optimized**: RequestAnimationFrame for smooth 60fps animations
- **Pure Vanilla JavaScript**: No framework dependencies for lightweight performance

## Getting Started

### Prerequisites

- Node.js (v20 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tsiemasilo/Edight-Bright-Group.git
cd Edight-Bright-Group
```

2. Start the server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:5000`

## Project Structure

```
.
├── index.html       # Home page with hero section and feature showcase
├── about.html       # About page with company info, values, and founders
├── services.html    # Services page with detailed service offerings
├── training.html    # Training & empowerment programs
├── contact.html     # Contact page with form and business info
├── style.css        # Advanced CSS with animations and theme colors
├── script.js        # JavaScript with scroll animations and interactions
├── server.js        # Node.js HTTP server
├── package.json     # Project dependencies
└── README.md        # This file
```

## Company Information

**Name**: EDIGHT (PTY) - EDGAR BRIGHT GROUP  
**Location**: Pretoria, Gauteng, South Africa  
**Email**: EDGARBRIGHTGROUP@GMAIL.COM  
**Phone**: 071 157 8316 | 072 447 6949  

**Founders**:
- Mantsie Senyane Bright - Co-Founder & Technical Director
- Edgar Tshwarelo Moloantoa - Co-Founder & Operations Director

## Advanced Animation Features

- **Intersection Observer API**: Scroll-triggered animations for elements as they enter viewport
- **Parallax Scrolling**: Multi-layer parallax effects on backgrounds and floating elements
- **Counter Animations**: Animated number counting for statistics
- **Floating Elements**: 3D-like floating animations with rotation and scale
- **Shimmer Effects**: Gradient shimmer overlays on service visual boxes
- **Stagger Animations**: Sequential reveal of multiple elements
- **Performance**: RequestAnimationFrame ensures smooth 60fps animations

## Development

The project uses a simple Node.js HTTP server to serve static files. The server is configured to:
- Serve files on port 5000 (required for Replit deployment)
- Bind to 0.0.0.0 for proper Replit proxy support
- Disable caching for immediate development updates
- Serve index.html as the default page

## Deployment

This project is configured for deployment on Replit with autoscale mode. The server automatically binds to `0.0.0.0:5000` to work with Replit's proxy.

## Theme Colors

The website uses a carefully chosen color palette:
- **#D1C7C1** (Beige): Soft accent and background tones
- **#FFFFFF** (White): Clean backgrounds and text
- **#D05353** (Red): Primary accent for CTAs and highlights
- **#181C28** (Dark Navy): Hero sections and dark elements

## Customization

You can easily customize the website by editing:
- **Content**: Modify HTML files to update company information
- **Colors**: Update CSS variables in `:root` selector in `style.css`
- **Animations**: Adjust animation timings and effects in `style.css` and `script.js`
- **Services**: Add or modify service offerings in `services.html`

## License

ISC

## Contact

For more information, please visit our website or contact us through the contact form.
