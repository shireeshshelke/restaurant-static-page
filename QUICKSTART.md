# Quick Start Guide

## 🚀 Get Your Cloud Kitchen Website Live in 5 Steps

### Step 1: Install Dependencies (Already Done ✅)
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to see your site

### Step 3: Generate & Add Images
1. See [IMAGE_REQUIREMENTS.md](./IMAGE_REQUIREMENTS.md)
2. Use the ChatGPT prompts to generate 9 images
3. Save images in `/public/images/`

### Step 4: Customize Your Content
1. Open [CUSTOMIZATION.md](./CUSTOMIZATION.md)
2. Update restaurant name, menu, hours, contact info
3. Change colors to your brand

### Step 5: Deploy
```bash
# Build for production
npm run build
npm run start

# Or deploy to Vercel
vercel
```

---

## 📋 Required Customizations

❌ **Must Do Before Launch:**
- [ ] Change restaurant name
- [ ] Update phone number & address
- [ ] Add all 9 images
- [ ] Update menu items
- [ ] Update operating hours
- [ ] Update delivery areas
- [ ] Update order links (Zomato, Swiggy, WhatsApp)

---

## 📸 Images You Need (9 Total)

| # | Image | Size | Purpose |
|---|-------|------|---------|
| 1 | hero.jpg | 1920x1080 | Hero banner |
| 2 | maharashtrian.jpg | 400x300 | Menu card |
| 3 | curries.jpg | 400x300 | Menu card |
| 4 | western.jpg | 400x300 | Menu card |
| 5 | story.jpg | 500x600 | About section |
| 6 | hygiene-certification.jpg | 300x300 | Trust building |
| 7 | hygiene-kitchen.jpg | 300x300 | Trust building |
| 8 | hygiene-vegetables.jpg | 300x300 | Trust building |
| 9 | hygiene-staff.jpg | 300x300 | Trust building |

**Generate using ChatGPT prompts in IMAGE_REQUIREMENTS.md**

---

## 🎨 Quick Color Change

Want to use your brand color instead of orange?

1. Open `tailwind.config.js`
2. Find line with `#ff6b5b`
3. Replace with your color hex code
4. Also update `app/globals.css` at lines with `#ff6b5b` and `#ffa500`

---

## 📝 Main Files to Customize

| File | Update | Section |
|------|--------|---------|
| `components/Navbar.js` | Restaurant name | Navigation |
| `components/MenuHighlights.js` | Dishes & images | Menu |
| `components/HygieneShowcase.js` | Hygiene info | Trust |
| `components/YourStory.js` | Your story | About |
| `components/Testimonials.js` | Reviews | Social proof |
| `components/ServiceArea.js` | Delivery areas & hours | Info |
| `components/HowToOrder.js` | Links to Zomato/Swiggy/WhatsApp | Ordering |
| `components/FAQ.js` | Your questions | Help |
| `components/Footer.js` | Contact & social links | Footer |

---

## ⚡ Website Features Included

✅ **Sticky Navigation Bar** - Changes on scroll  
✅ **Hero Section** - Full-screen with trust badges  
✅ **Why Choose Us** - 4 trust factors  
✅ **Menu Highlights** - Showcase your dishes  
✅ **Hygiene Showcase** - Build confidence  
✅ **Your Story** - Emotional connection  
✅ **Testimonials** - Social proof  
✅ **How to Order** - Easy ordering options  
✅ **Service Area & Hours** - Info customers need  
✅ **FAQ** - Answer common questions  
✅ **Final CTA** - Big conversion button  
✅ **Footer** - Complete business info  

All fully animated and mobile-responsive!

---

## 🔍 Check Everything Works

```bash
# Start server
npm run dev

# In another terminal, test build
npm run build

# No errors? You're good to go!
```

---

## 🎯 Pro Tips

1. **High-Quality Images**: Use professional food photography
2. **Consistent Branding**: Use same colors, fonts, tone throughout
3. **Update Regularly**: Add new testimonials, menu items quarterly
4. **Mobile First**: Always test on phone (yours first!)
5. **Fast Loading**: Compress images to under 500KB each
6. **Mobile Menu**: Test hamburger menu on phones
7. **Links**: Test all links work (especially order links)
8. **Analytics**: Add Google Analytics after launch

---

## 📞 Need Help?

- See **CUSTOMIZATION.md** for detailed instructions
- See **IMAGE_REQUIREMENTS.md** for image specifications  
- Check **README.md** for full documentation

---

## 🚀 Ready to Launch?

1. Customize all content ✓
2. Add all images ✓
3. Test on mobile ✓
4. Build: `npm run build`
5. Deploy to Vercel or your hosting

**Your Cloud Kitchen website is ready! 🍽️**

