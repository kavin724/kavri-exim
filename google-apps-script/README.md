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

---

## 🔍 Why Emails Skip the Inbox & How to Fix It

### The Reason:
In Google Workspace, if your primary login is **`kavinkumar@kavriexim.com`** and **`trade@kavriexim.com`** is an alias:
1. The Apps Script executes as **`kavinkumar@kavriexim.com`** (the sender).
2. The destination is **`trade@kavriexim.com`** (the same account).
3. **Gmail automatically routes self-sent emails into "Sent Mail" and skips the Primary Inbox!**
   - Check your **Sent** folder or search `to:trade@kavriexim.com` in Gmail—your inquiries are already there!

### Fix 1: Update Apps Script Deployment (Takes 1 Minute)
1. In Google Sheets, open **Extensions** > **Apps Script**.
2. Replace `Code.gs` with the updated code (which adds BCC and uses `moveToInbox()` + `msg.markUnread()` + `thread.markUnread()`).
3. Click **Deploy** > **Manage deployments**.
4. Click the **Pencil (Edit)** icon next to your active deployment.
5. In the **Version** dropdown, select **New version**.
6. Click **Deploy**. (The URL stays exactly the same!)

### How to Turn Past Inquiries Into UNREAD Right Now:
If previous inquiries in your Inbox are showing as already read:
1. In the Apps Script toolbar at the top, select the function dropdown (where it says `doPost` or `myFunction`).
2. Choose **`markAllPastInquiriesUnread`**.
3. Click the **Run** (▶) button.
4. Check your Gmail Inbox: all inquiry emails will immediately turn bold (**UNREAD**) with notification badges!

### Fix 2: Add a 30-Second Gmail Filter (Recommended)
In your Gmail account:
1. In the top search bar, click the **Show search options** icon (filter slider).
2. In the **To** field, enter: `trade@kavriexim.com`.
3. Click **Create filter**.
4. Check the following boxes:
   - ✅ **Never send it to Spam**
   - ✅ **Always mark it as important**
   - ✅ **Apply the label:** (Create a label like `Trade Inquiries / RFQs`)
   - ✅ **Categorize as: Primary**
5. Click **Create filter**.
All past and future RFQs will now be prominently visible in your Primary Inbox!

---

## 🏷️ Why Gmail Shows "me" & How It Displays "RFQ Website"

### Why Gmail shows "me":
In Gmail's web and mobile interface, the sender column hardcodes the label **`me`** whenever an email is sent from your own logged-in account (`kavinkumar@kavriexim.com`). This is a built-in interface feature in Gmail for self-sent mail.

### How the Updated Script Displays "RFQ Website":
1. **Official Sender Display Name**: Configured as **`RFQ Website`**. When you open the email or check notifications, it shows **`From: RFQ Website <kavinkumar@kavriexim.com>`**.
2. **Prominent Gmail Label Badge**: The script automatically attaches a Gmail label called **`RFQ Website`**. In your inbox, you will see a badge `[RFQ Website]` right next to the conversation!
3. **Subject Line Prefix**: The subject line now starts with **`[RFQ Website • Export RFQ • KE-RFQ-2026-XXXX]`**, so you immediately recognize it in your inbox row.

