# Shopify Landing Page Template

This project sets up a custom landing page on a Shopify store **without using a page builder**. It includes a custom page template, a scoped CSS file, and a stylelint configuration for consistent code formatting.

---

## 🚀 How It Works

1. **Create a New Page in Admin**
   - Go to **Online Store > Pages > Add Page**
   - Give it a name (e.g., "Promo Landing Page")
   - Under **Theme template**, select `page.landing`

2. **Custom Template**
   - The `page.landing.liquid` template:
     - Skips the site header
     - Loads custom styles from `landing-page.css`
     - Keeps the global `<head>` and includes the site footer

3. **Conditional CSS Load**
   In `theme.liquid`, add:
   ```liquid
   {% if template == 'page.landing' %}
     {{ 'landing-page.css' | asset_url | stylesheet_tag }}
   {% endif %}
   ```

---

## ✨ Stylelint Setup

This project uses Stylelint with support for SCSS and alphabetical ordering of CSS properties.

To install and lint styles:

```bash
npm install
npx stylelint "**/*.css"
```

---

## 📝 Notes

- If your theme automatically includes a header via `theme.liquid`, you can hide it with:
  ```css
  header, .site-header {
    display: none !important;
  }
  ```
- All styles should be added to `landing-page.css` to prevent conflicts with other site pages.

---

## 📄 License

This project is internal and not licensed for open-source distribution.
