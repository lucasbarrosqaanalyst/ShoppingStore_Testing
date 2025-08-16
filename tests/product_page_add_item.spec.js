import { test, expect } from "@playwright/test";

test("Product page added to basket", async({page})=>{
    //baseUrl to go to page https://automationteststore.com/
    await page.goto("/");
    
    const getItemToSelect = page.locator('[class="thumbnail"]').first();
    const addToCartButton = page.getByRole('link', { name: 'Add to Cart' }).first();
    const checkShoppingCart = page.getByRole('heading', { name: 'Shopping Cart' }).first();
    
    
    await getItemToSelect.click();
    await addToCartButton.click();
    await page.waitForURL("/index.php?rt=checkout/cart");
    await expect(checkShoppingCart).toHaveText('Shopping Cart');
    
});
