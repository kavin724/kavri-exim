# Kavri Exim - Google Sheets + Email Integration Setup Guide

This guide enables automatic **Google Sheets logging** and **elegant HTML email notifications** to **`trade@kavriexim.com`** whenever an international buyer submits an RFQ or Proforma Invoice request on your website.

---

## ⚡ 2-Minute Quick Setup

### Step 1: Create Your Google Sheet
1. Open your browser and go to [sheets.new](https://sheets.new) (logged into your Google Workspace account).
2. Name your sheet: **`Kavri Exim - B2B Export Leads CRM`**.

### Step 2: Open Apps Script
1. In the Google Sheets menu, click **Extensions** > **Apps Script**.
2. Rename the project at the top to: **`Kavri Exim Inquiry Webhook`**.

### Step 3: Paste the Script
1. Delete any existing code inside `Code.gs`.
2. Copy the entire contents of [`google-apps-script/Code.gs`](file:///c:/Users/ADMIN/.gemini/antigravity-ide/scratch/kavri-exim/google-apps-script/Code.gs) and paste it into the editor.
3. Click the **Save** (💾) icon.

### Step 4: Deploy as a Web App
1. In the top-right corner of Apps Script, click the blue **Deploy** button > **New deployment**.
2. Click the gear icon (⚙️) next to *Select type* and choose **Web app**.
3. Configure the settings:
   - **Description**: `Kavri Exim Trade Desk Webhook`
   - **Execute as**: `Me (your Google account)`
   - **Who has access**: **`Anyone`** *(Crucial: allows your public website forms to submit without requiring buyers to log in)*
4. Click **Deploy**.
5. When prompted, click **Authorize access**, select your Google account, and grant the permissions.
6. Copy the generated **Web App URL** (it looks like `https://script.google.com/macros/s/AKfycb.../exec`).

### Step 5: Connect to Website
1. Open [`src/config/formsConfig.js`](file:///c:/Users/ADMIN/.gemini/antigravity-ide/scratch/kavri-exim/src/config/formsConfig.js).
2. Replace `'https://script.google.com/macros/s/AKfycbyPLACEHOLDER/exec'` with your copied Web App URL.
   *(Alternatively, add `VITE_GOOGLE_SCRIPT_URL=your_url_here` to your `.env` file).*
3. Rebuild / deploy your website!

---

## 📬 What Happens on Form Submission

1. **Google Sheet CRM**:
   - Automatically writes to the **`Inquiries & RFQs`** tab.
   - Formats headers in Kavri Exim Forest Green with frozen header row.
   - Saves: Timestamp, Reference ID, Buyer Name, Company, Email, Phone, Destination Port, Incoterm, Product, Grade, Quantity, Packaging, Notes, Status.

2. **Executive HTML Email Delivery**:
   - Delivered immediately to **`trade@kavriexim.com`**.
   - **`Reply-To` is automatically set to the buyer's email**: Just click **"Reply"** in Gmail to write back to the buyer immediately!
   - Features Kavri Exim branding, quick-action WhatsApp button for the buyer, formatted order specs, and trade desk SOP checklist.
