import { test, expect } from "@playwright/test";

test("Product page added to basket", async({page})=>{
    await page.goto("https://automationteststore.com/");
    
    const addToBasketButton = page.locator('[title="Add to Cart"]').first();
    // const basketCounter = page.locator('[class="label label-orange font14"]').first();

    
    await addToBasketButton.click();
    // await expect(basketCounter).toHaveText("1");
    
});
