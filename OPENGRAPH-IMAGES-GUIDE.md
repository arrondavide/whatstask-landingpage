# OpenGraph & Social Media Images Guide

**Created:** December 30, 2025
**Status:** Required for optimal social sharing

---

## 🎯 Why This Matters

When someone shares your website on social media, the image displayed can **increase click-through rates by 2-3x**. Currently, you're using `logo.png` which is:
- ❌ Too small (not optimized for social cards)
- ❌ Not visually compelling for shares
- ❌ Doesn't showcase your product effectively

---

## 📐 Required Images

### 1. OpenGraph Image (Facebook, LinkedIn, Slack)
**Filename:** `og-image.png`
**Dimensions:** 1200 x 630 pixels
**Format:** PNG or JPG
**Max size:** 8 MB (but keep under 300 KB for faster loading)

**Design suggestions:**
- Dark background matching brand (#000000)
- Whatstask logo (top left or center)
- Main headline: "Manage Tasks in Telegram"
- Subheadline: "AI Reminders + Free PDF Tools"
- Clean, readable typography (Plus Jakarta Sans)
- Optional: Screenshot of bot in action
- Teal accent color (#14B8A6) for highlights

### 2. Twitter Card Image
**Filename:** `twitter-image.png`
**Dimensions:** 1200 x 675 pixels (16:9 ratio)
**Format:** PNG or JPG
**Max size:** 5 MB

**Design suggestions:**
- Similar to OG image but wider aspect ratio
- Focus on horizontal layout
- Same brand colors and fonts

### 3. Square Social Image (Optional)
**Filename:** `social-square.png`
**Dimensions:** 1080 x 1080 pixels
**For:** Instagram, WhatsApp previews

---

## 🎨 Design Tools & Templates

### Option 1: Canva (Easiest)
1. Go to [Canva.com](https://www.canva.com)
2. Search for "Facebook Post" or "Twitter Post" templates
3. Customize with Whatstask branding:
   - Background: Black (#000000)
   - Accent: Teal (#14B8A6)
   - Font: Plus Jakarta Sans or similar
4. Download as PNG

### Option 2: Figma (Professional)
1. Create artboard: 1200 x 630px
2. Use brand guidelines from BRAND-IDENTITY.md
3. Export as PNG @2x for retina displays

### Option 3: AI Generation
Use AI tools like:
- Midjourney: "Modern dark minimalist social media card for task management app"
- DALL-E 3: "Professional social media image, dark background, teal accents, task management theme"

---

## 📝 Recommended Content on Images

### For Homepage (`og-image.png`)
```
Headline: "Whatstask - Your Telegram Task Assistant"
Subheadline: "Manage tasks, set AI reminders, convert PDFs"
Badge: "Free to Start"
Visual: Telegram icon + task checkmarks
```

### For Blog Posts (Dynamic)
```
Headline: [Article Title]
Author: "By Whatstask Team"
Visual: Related icon or illustration
Category badge: "Productivity Guide"
```

### For Comparison Pages
```
Headline: "Whatstask vs [Competitor]"
Visual: Side-by-side comparison graphic
Badge: "Honest Comparison 2025"
```

---

## 🔧 Implementation Steps

### Step 1: Create Images
1. Design og-image.png (1200x630)
2. Design twitter-image.png (1200x675)
3. Save to `/public/` directory

### Step 2: Update Metadata

**In `app/layout.tsx`:**
```typescript
openGraph: {
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Whatstask - Telegram Task Management Bot",
    },
  ],
},
twitter: {
  images: ["/twitter-image.png"],
},
```

**For individual pages (e.g., blog posts):**
```typescript
export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "/blog-og-telegram-bots.png",
        width: 1200,
        height: 630,
        alt: "Ultimate Guide to Telegram Bots for Productivity",
      },
    ],
  },
}
```

### Step 3: Test Your Images

**Before deploying, test with:**
1. **OpenGraph Debugger**: https://www.opengraph.xyz/
2. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
4. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

---

## 🎯 Priority Order

### Immediate (Launch)
1. ✅ Homepage OG image (`og-image.png`)
2. ✅ Twitter card image (`twitter-image.png`)

### High Priority (Week 1)
3. Blog pillar article OG image
4. Comparison pages OG images (Skeddy, Todoist)

### Medium Priority (Week 2-4)
5. Individual tool pages OG images
6. Use case pages OG images
7. Additional blog posts as published

---

## 📏 Image Specifications Summary

| Platform | Dimensions | Aspect Ratio | Max Size | Format |
|----------|-----------|--------------|----------|--------|
| Facebook | 1200 x 630 | 1.91:1 | 8 MB | PNG/JPG |
| Twitter | 1200 x 675 | 16:9 | 5 MB | PNG/JPG |
| LinkedIn | 1200 x 627 | 1.91:1 | 5 MB | PNG/JPG |
| Instagram | 1080 x 1080 | 1:1 | 8 MB | PNG/JPG |

---

## ✅ Quick Checklist

Before publishing social images:
- [ ] Correct dimensions for platform
- [ ] Brand colors used (#000000, #14B8A6)
- [ ] Readable text (minimum 24px font size)
- [ ] Logo included
- [ ] High contrast for readability
- [ ] File size under 300 KB
- [ ] Saved in `/public/` directory
- [ ] Metadata updated in code
- [ ] Tested with debuggers

---

## 🎨 Temporary Placeholder

Until you create custom images, you can use a solid color placeholder:

1. Create 1200x630 solid teal image with white text
2. Use free tool: https://placehold.co/1200x630/14B8A6/FFFFFF?text=Whatstask
3. Download and save as temporary `og-image.png`

---

## 💡 Pro Tips

1. **Text Overlay**: Keep text in "safe zone" (center 80% of image) to avoid cropping
2. **Mobile Preview**: Test how image looks in mobile share previews
3. **A/B Testing**: Try different designs and track engagement
4. **Seasonal Updates**: Update OG image for major launches or holidays
5. **Template System**: Create a Figma template for consistent blog post images

---

## 🔗 Resources

- [OpenGraph Protocol](https://ogp.me/)
- [Twitter Card Docs](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Facebook Sharing Best Practices](https://developers.facebook.com/docs/sharing/best-practices)
- [Canva Social Media Templates](https://www.canva.com/templates/)
- [Free Stock Photos](https://unsplash.com/s/photos/productivity)

---

**Next Action:** Create `og-image.png` and `twitter-image.png` and place them in `/public/` directory before deploying.
