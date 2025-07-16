# AWS Certification Preparation Website

A comprehensive, full-featured AWS certification preparation platform built with React.js, designed to help users master AWS Cloud Practitioner and Solutions Architect Associate certifications.

## 🚀 Live Demo

[Live Website](https://your-deployed-url-here.com) *(Will be updated after deployment)*

## 📋 Features

### 🎯 Practice Tests
- **AWS Certified Cloud Practitioner** (Beginner Level)
  - 90-minute timed practice tests
  - Comprehensive question bank covering all exam domains
  - Detailed explanations for each answer

- **AWS Certified Solutions Architect - Associate** (Advanced Level)
  - Complex scenario-based questions
  - Advanced architectural concepts
  - Real-world problem-solving scenarios

### 📚 Documentation
- Comprehensive guide to major AWS services
- Detailed service descriptions with key features
- Common use cases and pricing information
- Categorized by service type (Compute, Storage, Database, etc.)
- Search functionality across all services

### ⭐ Key Features
- **Timer Functionality**: Realistic exam timing for practice tests
- **Answer Explanations**: Detailed explanations after test submission
- **Bookmark System**: Save questions for later review
- **Search Capability**: Find specific questions or AWS services quickly
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Progress Tracking**: Monitor your performance and improvement
- **Category Filtering**: Filter content by certification type or service category

## 🛠️ Technology Stack

- **Frontend**: React.js with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API

## 🏗️ Project Structure

```
aws-cert-prep/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   └── Header.tsx    # Navigation header
│   ├── contexts/
│   │   └── BookmarkContext.tsx  # Bookmark state management
│   ├── data/
│   │   └── questions.ts  # Practice test questions
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── PracticeTestsPage.tsx
│   │   ├── TestPage.tsx
│   │   ├── DocumentationPage.tsx
│   │   └── BookmarksPage.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbhishekWorld2024/AWS-Preparation.git
   cd AWS-Preparation/aws-cert-prep
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📖 Usage Guide

### Taking Practice Tests

1. Navigate to **Practice Tests** from the main menu
2. Choose your certification level (Cloud Practitioner or Solutions Architect)
3. Click **Start Practice Test** to begin
4. Answer questions within the time limit
5. Use the bookmark feature to save questions for later review
6. Submit your test to see results and explanations

### Studying AWS Services

1. Go to the **Documentation** section
2. Browse AWS services by category or use the search function
3. Each service includes:
   - Key features and capabilities
   - Common use cases
   - Pricing information
   - Category classification

### Managing Bookmarks

1. Bookmark questions during practice tests
2. Access saved questions in the **Bookmarks** section
3. Review questions with full explanations
4. Filter bookmarks by certification category
5. Search through your saved questions

## 🎨 Design Features

- **Modern UI**: Clean, professional interface with intuitive navigation
- **Responsive Design**: Seamless experience across all device sizes
- **Accessibility**: Built with accessibility best practices
- **Performance**: Optimized for fast loading and smooth interactions
- **Visual Feedback**: Clear indicators for progress, selections, and actions

## 📊 Question Bank

The platform includes a comprehensive question bank covering:

### Cloud Practitioner Topics
- AWS Cloud concepts and value proposition
- AWS services and their use cases
- Security and compliance
- Billing and pricing models
- Support plans and resources

### Solutions Architect Topics
- Design resilient architectures
- High-performing architectures
- Secure applications and architectures
- Cost-optimized architectures
- Operational excellence

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abhishek Arugonda**
- GitHub: [@AbhishekWorld2024](https://github.com/AbhishekWorld2024)
- Email: abhishek.arugonda223@gmail.com

## 🙏 Acknowledgments

- AWS for providing comprehensive certification programs
- React.js community for excellent documentation and tools
- shadcn/ui for beautiful, accessible UI components
- TailwindCSS for utility-first styling approach

## 📞 Support

If you have any questions or need help with the platform:

1. Check the documentation section for AWS service information
2. Review the practice test explanations for detailed answers
3. Open an issue on GitHub for technical problems
4. Contact the author for additional support

---

**Happy studying and good luck with your AWS certification journey! 🎉**
