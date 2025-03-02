---
title: Share & Distribute
description: Options to share and distribute
keywords:
  - Packaging UXP scripts
  - Packaging UXP plugins
  - ccx
  - idjs
  - plugin bundle
contributors:
  - https://github.com/padmkris123
---

# Packaging 
As the first step, you need to prepare your script or plugin for sharing.

## Scripts
Preparing your scripts for sharing needs no additional steps. The `.idjs` file can be shared as it is with other developers and users.

## Plugins
UXP plugins are distributed in the form of a `.ccx` file. Under the hood, this is a zip file. 

<InlineAlert variant="info" slots="text1, text1"/>

**IMPORTANT notes**:
- Unless you have some special requirements, you should not be creating this zip file yourself.
- Before you package your plugin for distribution outside your own computer, make sure you've obtained a valid plugin ID from the [Developer Distribution portal](https://developer.adobe.com/developer-distribution/creative-cloud/overview/guides/plugin_id/). Without an id (which goes in the `id` field of your plugin's `manifest.json` file), you won't be able to distribute your plugin in the Creative Cloud Marketplace.



### Packaging a plugin
Taking your plugin code and packaging it has never been easier.

Using the [UXP Developer Tool](../../devtool/), choose `Package` from the Actions menu (the ellipsis on the right side of the Developer Tool window, on the same line as your plugin name):

![Package Menu](../images/udt-package-menu.png)

This shows a "Select target directory" dialog. Choose a directory where your built plugin `.ccx` file should reside.

After the `.ccx` file has been created, you should see this message at the bottom of the Developer Tool window:

![Package Success](../images/package-success.png)

If instead, you see this:

![Package Failed](../images/package-failed.png)

Click on `Details` to view a window that shows why the packaging failed.

Once your `.ccx` file has been built, you should test it locally before doing anything else. To install a .ccx file into any Creative Cloud application, double-click it. This will open the Creative Cloud application, and you'll get a warning that your plugin hasn't been verified by Adobe:

![Verify Failed](../images/verify-failed.png)

Since you wrote the plugin, it's probably safe to install. Click `Install` and you'll see another warning:

![Install Warning](../images/install-warning.png)

Since, in this case, *you* are the third-party developer, it's safe to click OK. Obviously, if someone else sends you a `.ccx` file and you get this dialog, you should make sure you trust the person who sent it.

Now that you have your plugin installed, test it again to make sure the packaged version performs correctly. Then move on to [Options for Distribution](../distribution-options) to get your plugin out into the world.
