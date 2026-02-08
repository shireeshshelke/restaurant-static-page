# Image Requirements for Cloud Kitchen Restaurant Website

This document lists all the images that need to be placed in the `/public/images/` directory for the website to display correctly.

## Image Files Required

### 1. **hero.jpg** (Hero Section)
- **Location:** `/public/images/hero.jpg`
- **Dimensions:** 1920x1080px (Full-width background)
- **Description:** High-quality, appetizing hero banner image
- **ChatGPT Prompt:**
```
Create a high-quality, appetizing food photography image showing a beautifully plated traditional Indian meal with various dishes arranged together. The image should be warm, inviting, and have professional lighting. Include Maharashtra, Hindi, and traditional Indian cuisine elements. Make it look fresh, authentic, and homemade. The image should work as a full-width website hero banner. Use warm tones with good depth of field to make the food pop. Professional food photography style.
```

---

### 2. **maharashtrian.jpg** (Menu Highlights - Maharashtrian Specials)
- **Location:** `/public/images/maharashtrian.jpg`
- **Dimensions:** 400x300px
- **Description:** Showcase plated Maharashtrian cuisine
- **ChatGPT Prompt:**
```
Professional food photography of authentic Maharashtrian cuisine. Show a beautifully plated traditional Maharashtrian meal with items like misal pav, batata vada, or puran poli. The presentation should look restaurant-quality with vibrant colors and warm lighting. Include fresh vegetables and traditional brass or ceramic serving vessels. The image should convey authenticity, freshness, and homemade quality.
```

---

### 3. **curries.jpg** (Menu Highlights - Indian Curries)
- **Location:** `/public/images/curries.jpg`
- **Dimensions:** 400x300px
- **Description:** Showcase Indian curry dishes
- **ChatGPT Prompt:**
```
Professional food photography of rich, creamy Indian curries. Show multiple curry preparations like butter chicken, paneer tikka masala, and dal makhani in traditional serving bowls (brass or stainless steel). Include naan bread or rice on the side. The image should have warm, appetizing lighting that showcases the rich colors and textures of the curries. Professional restaurant-quality presentation.
```

---

### 4. **western.jpg** (Menu Highlights - Western Snacks)
- **Location:** `/public/images/western.jpg`
- **Dimensions:** 400x300px
- **Description:** Showcase Western snack items
- **ChatGPT Prompt:**
```
Professional food photography of Western/Continental snacks. Show items like momos, cheese naan, loaded fries, and spring rolls arranged attractively. Include dipping sauces and fresh herbs as garnish. Use professional lighting to showcase the crispy, golden textures. The image should look appetizing and Instagram-worthy with vibrant colors and good depth of field. Clean, modern food styling.
```

---

### 5. **story.jpg** (Your Story Section)
- **Location:** `/public/images/story.jpg`
- **Dimensions:** 500x600px
- **Description:** Home kitchen or family cooking scene
- **ChatGPT Prompt:**
```
Warm, inviting lifestyle photography of a family or grandmother cooking in a traditional Indian home kitchen. Show someone preparing food with love and care. The scene should feel authentic, emotional, and tell a story of home-cooked meals and family recipes. Include traditional kitchen elements, fresh ingredients, and warm lighting that creates a cozy, nostalgic atmosphere. The image should evoke feelings of comfort, trust, and authenticity. Focus on the emotion and connection to food preparation.
```

---

### 6. **hygiene-certification.jpg** (Hygiene Showcase - Certification)
- **Location:** `/public/images/hygiene-certification.jpg`
- **Dimensions:** 300x300px
- **Description:** FSSAI certification or food safety certificate
- **ChatGPT Prompt:**
```
Professional close-up photograph of food safety certifications and licenses on display. Show FSSAI certificate, hygiene badges, or food safety seals. The image should look official, trustworthy, and clearly show certification marks. Use professional photography with good lighting and clear text visibility. Include elements like official seals, inspection marks, or quality badges. The image should convey professionalism and regulatory compliance.
```

---

### 7. **hygiene-kitchen.jpg** (Hygiene Showcase - Clean Kitchen)
- **Location:** `/public/images/hygiene-kitchen.jpg`
- **Dimensions:** 300x300px
- **Description:** Clean, modern, hygienic kitchen environment
- **ChatGPT Prompt:**
```
Professional photograph of a spotlessly clean, modern kitchen with stainless steel countertops, shiny surfaces, and organized food preparation area. The kitchen should look clinical but warm, with excellent lighting showing cleanliness and professionalism. Include elements like stainless steel tabletops, clean storage, organized utensils, and modern equipment. The image should convey food safety, hygiene standards, and professional kitchen operations. Use bright, clean lighting.
```

---

### 8. **hygiene-vegetables.jpg** (Hygiene Showcase - Washed Vegetables)
- **Location:** `/public/images/hygiene-vegetables.jpg`
- **Dimensions:** 300x300px
- **Description:** Fresh, washed vegetables and produce
- **ChatGPT Prompt:**
```
Professional food photography of freshly washed, vibrant vegetables and produce. Show items like tomatoes, spinach, peppers, onions, and other fresh vegetables glistening with water droplets, clearly cleaned and fresh. Include water splashing or vegetables being washed in a clean stainless steel sink or basin. The image should emphasize freshness, cleanliness, and quality produce. Use bright, natural lighting to showcase the vibrant colors and freshness of the vegetables.
```

---

### 9. **hygiene-staff.jpg** (Hygiene Showcase - Safety Gear)
- **Location:** `/public/images/hygiene-staff.jpg`
- **Dimensions:** 300x300px
- **Description:** Kitchen staff wearing proper safety equipment
- **ChatGPT Prompt:**
```
Professional photograph showing kitchen staff wearing proper food safety gear: hairnets, food-safe gloves, clean aprons, and head coverings. The staff should be shown in professional poses while preparing food or working in the kitchen. The image should convey professionalism, food safety adherence, and trained personnel. Emphasize the hygiene measures with clear visibility of safety equipment. Use professional lighting and show the kitchen environment in the background.
```

---

## Installation Instructions

1. **Create the images directory** (if it doesn't exist):
   ```bash
   mkdir -p public/images
   ```

2. **Save or place images in the directory:**
   - Generate images using ChatGPT with the provided prompts
   - Download the generated images
   - Save them in `/public/images/` with the exact filenames listed above

3. **File format:**
   - Recommended format: **JPG** for best quality and smaller file sizes
   - All images should be optimized for web (compressed)

---

## Image Generation Tips

### Using ChatGPT/DALL-E:
1. Copy the ChatGPT prompt provided for each image
2. Paste it in ChatGPT with the DALL-E image generation feature
3. Generate the image
4. Download in JPG format
5. Save with the exact filename in `/public/images/`

### Alternative Tools:
- Midjourney
- Adobe Firefly
- Canva (Pro)
- Unsplash/Pexels (for free stock photos, with attribution)

---

## Size Optimization

After downloading/generating images, optimize them for web:

### Using ImageOptim (Mac):
1. Drag images to ImageOptim
2. Select JPEG format
3. Save optimized versions

### Using Online Tools:
- TinyJPG (tinyjpg.com) - Compress JPEG files
- ImageOptim Online - Quick optimization
- Squoosh (squoosh.app) - Google's image optimizer

---

## Total Images Required: 9

Once all images are in place, refresh the website in your browser (Ctrl+Shift+R or Cmd+Shift+R) to clear cache and see the fully rendered website.

