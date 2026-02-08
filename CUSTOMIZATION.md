# CUSTOMIZATION GUIDE

This guide will help you customize the Cloud Kitchen landing page for your restaurant.

## 📝 Step-by-Step Customization

### Step 1: Update Restaurant Information

#### File: `components/Navbar.js`
```javascript
// Change line 45-48:
<h1 className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
  Cloud Kitchen              // ← Change this to your restaurant name
</h1>
<p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
  Ghar Jaisa Khana          // ← Change this to your tagline
</p>
```

#### File: `components/Footer.js`
```javascript
// Change restaurant name, contact details:
Phone: '+91 9876543210'     // ← Update with your phone
Email: 'hello@cloudkitchen.com'  // ← Update email
Address: 'Pune, Maharashtra, India'  // ← Update address
```

#### File: `app/layout.js`
```javascript
// Update metadata:
title: 'Cloud Kitchen | Your Restaurant Name Here'
description: 'Update this to describe your restaurant'
```

---

### Step 2: Customize Sections

#### Menu Highlights - `components/MenuHighlights.js`

Update the `categories` array:
```javascript
const categories = [
  {
    title: 'Your Category 1',
    image: '/images/category1.jpg',
    dishes: ['Dish 1', 'Dish 2', 'Dish 3', 'Dish 4', 'Dish 5'],
    rating: 4.8,
  },
  // ... add more categories
];
```

#### Why Choose Us - `components/WhyChooseUs.js`

Update the `items` array:
```javascript
const items = [
  { 
    icon: ShieldCheck, 
    title: "Your Feature 1", 
    description: "Your description here" 
  },
  // ... add more
];
```

#### Testimonials - `components/Testimonials.js`

Update the `testimonials` array:
```javascript
const testimonials = [
  {
    name: 'Customer Name',
    locality: 'Area, City',
    rating: 5,
    quote: 'Their actual review here...',
    image: 'https://via.placeholder.com/80?text=CN',
  },
  // ... add more testimonials
];
```

#### Service Area - `components/ServiceArea.js`

Update delivery areas:
```javascript
const areas = [
  'Your Area 1',
  'Your Area 2',
  'Your Area 3',
  // ... add all your delivery areas
];
```

Update business hours:
```javascript
const businessHours = [
  { day: 'Monday - Friday', time: '10:00 AM - 10:00 PM' },
  // ... update with actual times
];
```

#### FAQ - `components/FAQ.js`

Update the `faqs` array:
```javascript
const faqs = [
  {
    question: 'Your question here?',
    answer: 'Your answer here...'
  },
  // ... add your FAQs
];
```

---

### Step 3: Update Links

#### File: `components/HowToOrder.js`
```javascript
const platforms = [
  {
    // ...
    link: 'https://zomato.com/your-restaurant', // ← Update this
    buttonText: 'Open Zomato',
  },
  {
    // ...
    link: 'https://swiggy.com/your-restaurant', // ← Update this
    buttonText: 'Open Swiggy',
  },
  {
    // ...
    link: 'https://wa.me/919876543210', // ← Update with your WhatsApp number
    buttonText: 'WhatsApp Us',
  },
];
```

#### File: `components/Footer.js`
```javascript
// Update social links:
const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/yourprofile', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/yourprofile', label: 'Facebook' },
  // ...
];

// Update footer links:
const footerLinks = {
  Company: [
    { label: 'About Us', href: '#story' },
    // ...
  ],
};
```

---

### Step 4: Customize Colors

#### File: `tailwind.config.js`

Change the primary color from orange to your brand color:
```javascript
colors: {
  orange: {  // ← Rename to your color
    500: '#ff6b5b',  // ← Change to your color hex
    600: '#ff6b5b',
  }
}
```

Then in CSS files, replace `orange-500` with `your-color-500`.

#### File: `app/globals.css`

Update gradient:
```css
.gradient-text {
  background: linear-gradient(135deg, #ff6b5b 0%, #ffa500 100%);
  /* ↑ Change these hex codes to your brand colors */
}

.gradient-orange {
  background: linear-gradient(135deg, #ff6b5b 0%, #ffa500 100%);
  /* ↑ Same here */
}
```

---

### Step 5: Upload Images

1. Generate 9 images using ChatGPT prompts (see IMAGE_REQUIREMENTS.md)
2. Save images in `/public/images/` with exact filenames:
   - hero.jpg
   - maharashtrian.jpg
   - curries.jpg
   - western.jpg
   - story.jpg
   - hygiene-certification.jpg
   - hygiene-kitchen.jpg
   - hygiene-vegetables.jpg
   - hygiene-staff.jpg

3. Optimize images:
   - Use TinyJPG.com for compression
   - Keep file sizes under 500KB each
   - Use JPG format for photos

---

### Step 6: Update About & Story Section

#### File: `components/YourStory.js`

Update the story:
```javascript
<p className="text-lg text-gray-700 mb-8 leading-relaxed">
  In 2021, our founder... [Your actual story here]
</p>

<p className="text-lg text-gray-700 mb-12 leading-relaxed">
  Today, we... [Continue your story]
</p>
```

Update story points:
```javascript
const storyPoints = [
  {
    icon: Heart,
    title: 'Your Journey Title',
    description: 'Your description about why you started',
  },
  // ...
];
```

---

### Step 7: Set Up Analytics & SEO

#### Add Google Analytics - File: `app/layout.js`

```javascript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ... existing code ... */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_ID');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

### Step 8: Advanced Customization

#### Change Animation Speed
In any component file, find Framer Motion transitions:
```javascript
transition={{ duration: 1 }}  // ← Change duration (in seconds)
```

#### Change Navbar Behavior
In `components/Navbar.js`, update the scroll threshold:
```javascript
if (window.scrollY > 50)  // ← Change from 50 to desired pixels
```

#### Change Button Text & Links
Search for `Order Now` and update all occurrences with your CTA text.

---

## 🎨 Color Scheme Reference

### Current Orange Palette:
```
Primary: #ff6b5b
Secondary: #ffa500
Light: #fed7aa
Dark: #c2410c
```

### Common Brand Colors to Use:
```
Red: #ef4444 to #dc2626
Green: #22c55e to #16a34a
Blue: #3b82f6 to #1d4ed8
Purple: #a855f7 to #7c3aed
Pink: #ec4899 to #be185d
```

---

## 📱 Mobile Customization

The site is mobile-first responsive. To adjust mobile layouts:

Find `md:` or `lg:` classes for responsive changes:
```javascript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                           ↑              ↑
                        Tablet       Desktop
```

---

## 🔒 Important Files NOT to Change

Unless you know what you're doing:
- `app/layout.js` - Root setup
- `tailwind.config.js` - CSS framework config
- `postcss.config.js` - CSS processing
- `package.json` - Dependencies

---

## ⚡ Quick Checklist

Before launching:
- [ ] Update restaurant name everywhere
- [ ] Change contact information
- [ ] Upload all 9 images
- [ ] Update menu items
- [ ] Add your testimonials
- [ ] Update service areas
- [ ] Update operating hours
- [ ] Change order links (Zomato, Swiggy, WhatsApp)
- [ ] Update social media links
- [ ] Change brand color if desired
- [ ] Test on mobile devices
- [ ] Add Google Analytics ID
- [ ] Test ordering links work
- [ ] Check all images load
- [ ] Review all text for typos

---

## 🚀 Deployment Checklist

Before going live:
- [ ] Build tests: `npm run build`
- [ ] No console errors
- [ ] All links working
- [ ] Images optimized
- [ ] Mobile responsive
- [ ] Fast load times
- [ ] SEO metadata complete
- [ ] Analytics set up
- [ ] Contact info is correct

---

## 🆘 Need Help?

Common issues:

**Images not showing?**
- Check filenames match exactly (case-sensitive)
- Verify images are in `/public/images/`
- Refresh browser with Ctrl+Shift+R

**Styling looks off?**
- Clear browser cache
- Rebuild Tailwind: `npm run dev`
- Check responsive breakpoints

**Links not working?**
- Verify URLs are correct
- Make sure WhatsApp number has country code (+91)
- Test links in incognito mode

---

Good luck with your Cloud Kitchen website! 🍽️✨

