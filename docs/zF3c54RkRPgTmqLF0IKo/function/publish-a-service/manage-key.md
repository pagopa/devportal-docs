# Manage key

The `manage` key is an API key that is used to manage the services via API and therefore perform any operation related to the services. 

{% hint style="info" %} It is the **only API key** you can use with the APIs part of the `manage` group, which can be identified by the tag in the specific openAPI and in the path. {% endhint %}

{% hint style="warning" %} To be able to use this API key, it is necessary to be [authorized for managing the services](../../enabling/manage-services.md). {% endhint %}

## Get the `manage` key

#### Via the Developer Portal

1. [**Access**](https://developer.io.italia.it/) the Developer Portal;
2. In the left column, select **“Services”**;
3. If you are enabled, you will see a box at the top with the `manage` key just below the account information;
4. View and copy the key to be able to use it in your integration.

#### Via the Reserved Area

1. [**Access**](https://selfcare.pagopa.it/) the Reserved Area;
2. Select the institution for which you want to operate from the list that is displayed;
3. The IO app searches among the active products and click the relative box;
4. You can immediately find the Manage key APIs that you can copy in the **overview**;
5. If you want to manage the Manage key APIs, you can select the menu item **"API key"** to be able to copy or rotate them.