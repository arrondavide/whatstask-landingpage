# Google Search Console Setup Guide

## Quick Setup Instructions

### Step 1: Add Your Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose "Domain" property type (recommended)
4. Enter: `whatstask.com`

### Step 2: Verify Domain Ownership

You'll need to add a DNS TXT record. Here's how:

#### If using Cloudflare:
1. Log in to Cloudflare
2. Go to DNS settings
3. Add a new TXT record:
   - **Name:** `@` (or leave blank)
   - **Content:** The verification string Google provides (starts with `google-site-verification=`)
   - **TTL:** Auto
4. Save and return to Google Search Console
5. Click "Verify"

#### If using another DNS provider:
1. Log in to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS settings
3. Add the TXT record with Google's verification code
4. Wait 5-10 minutes for DNS propagation
5. Return to GSC and click "Verify"

### Step 3: Submit Your Sitemap

1. In Google Search Console, go to "Sitemaps" in the left menu
2. Enter: `https://www.whatstask.com/sitemap.xml`
3. Click "Submit"

### Step 4: Request Indexing for Key Pages

1. Go to "URL Inspection" tool
2. Enter these URLs one by one and request indexing:
   - `https://www.whatstask.com/`
   - `https://www.whatstask.com/tools`
   - `https://www.whatstask.com/pdf-merger`
   - `https://www.whatstask.com/pdf-compressor`
   - `https://www.whatstask.com/pdf-to-jpg`
   - `https://www.whatstask.com/jpg-to-pdf`
   - `https://www.whatstask.com/pdf-splitter`
   - `https://www.whatstask.com/qr-code-generator`

### Step 5: Add Verification Code to Site (Optional but Recommended)

Once verified via DNS, you can also add an HTML meta tag for backup verification:

1. Copy your verification code from Google Search Console
2. Open `app/layout.tsx`
3. Uncomment and update lines 102-104:
   ```typescript
   verification: {
     google: "google-site-verification=YOUR-CODE-HERE",
   },
   ```
4. Replace `YOUR-CODE-HERE` with the actual code
5. Deploy the change

---

## What to Monitor Weekly

### 1. Performance Report
- Track impressions, clicks, CTR
- Monitor which queries are driving traffic
- Identify pages gaining/losing visibility

### 2. Coverage Report
- Check for crawl errors
- Fix any "Excluded" pages
- Ensure all important pages are "Valid"

### 3. Core Web Vitals
- Monitor mobile/desktop performance
- Fix any "Poor" URLs
- Aim for all "Good" status

### 4. Manual Actions
- Check for penalties (should be none)
- If any appear, fix immediately

---

## Expected Timeline

- **Day 1-3:** Domain verified, sitemap submitted
- **Week 1:** First pages indexed
- **Week 2-4:** Most pages indexed, initial data appears
- **Month 2-3:** Meaningful ranking data available
- **Month 6:** Significant organic traffic growth

---

## Pro Tips

1. **Enable email notifications** for critical issues
2. **Link to Google Analytics** for richer data
3. **Monitor mobile usability** - most traffic is mobile
4. **Check structured data** for any errors
5. **Set up multiple verification methods** (DNS + HTML tag) for backup

---

## Troubleshooting

### "Sitemap not found"
- Verify the sitemap URL works in your browser
- Check robots.txt allows crawling
- Wait 24-48 hours and try again

### "DNS verification failed"
- Wait longer (DNS can take up to 72 hours)
- Double-check the TXT record is exact
- Remove any extra quotes or spaces

### "Page not indexed"
- Check robots.txt isn't blocking
- Verify page is in sitemap
- Request indexing manually
- Wait - indexing can take 1-4 weeks

---

**Need help?** Check the [Google Search Console documentation](https://support.google.com/webmasters)
