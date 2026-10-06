import { test, expect } from "@playwright/test";
import { destinations } from "../src/data/destinations.js";

test.beforeEach(async ({ page }) => {
  page.runtimeErrors = [];
  page.on("pageerror", (error) => page.runtimeErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") page.runtimeErrors.push(message.text());
  });
});
test.afterEach(async ({ page }) => {
  expect(page.runtimeErrors).toEqual([]);
});

async function noOverflow(page) {
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth + 1,
    ),
  ).toBe(true);
}

test("home images, navigation, and layout render correctly", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Discover the",
  );
  await expect(page.locator(".destination-card")).toHaveCount(6);
  for (const img of await page.locator("main img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        img.evaluate((image) => image.complete && image.naturalWidth > 0),
      )
      .toBe(true);
  }
  await expect(page.locator(".photo-fallback")).toHaveCount(0);
  await noOverflow(page);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: `test-results/screenshots/${testInfo.project.name}-home.png`,
    fullPage: true,
  });
  await page.screenshot({
    path: `test-results/screenshots/${testInfo.project.name}-home-viewport.png`,
  });
  if (page.viewportSize().width <= 860) {
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(
      page.getByRole("navigation", { name: "Main navigation" }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
    await page.getByRole("button", { name: "Open menu" }).click();
  }
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Destinations", exact: true })
    .click();
  await expect(page).toHaveURL(/\/destinations$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Explore",
  );
});

test("search, combined filters, empty state, and reset work", async ({
  page,
}) => {
  await page.goto("/destinations");
  await expect(page.locator(".destination-card")).toHaveCount(10);
  await page.getByRole("button", { name: "Beaches", exact: true }).click();
  await expect(page.locator(".destination-card")).toHaveCount(2);
  await page
    .getByRole("searchbox", { name: "Search destinations" })
    .fill("ALIGUAY");
  await expect(page.locator(".destination-card")).toHaveCount(1);
  await expect(page.locator(".destination-card h3")).toHaveText(
    "Aliguay Island",
  );
  await page.getByRole("searchbox").fill("unfindable-place");
  await expect(
    page.getByRole("heading", { name: "A little off the map?" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Show all destinations" }).click();
  await expect(page.locator(".destination-card")).toHaveCount(10);
  await page.getByRole("searchbox").fill("dipolog");
  await expect(page.locator(".destination-card")).toHaveCount(4);
  await noOverflow(page);
});

test("filters persist in URLs and experience links select the right category", async ({
  page,
}) => {
  await page.goto("/explore");
  await page
    .getByRole("link", { name: /Beaches & Islands/ })
    .first()
    .click();
  await expect(page).toHaveURL(/category=Beaches/);
  await expect(
    page.getByRole("button", { name: "Beaches", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.reload();
  await expect(page.locator(".destination-card")).toHaveCount(2);
  await page.getByRole("button", { name: "Historical", exact: true }).click();
  await expect(page.locator(".destination-card")).toHaveCount(3);
  await page.goBack();
  await expect(
    page.getByRole("button", { name: "Beaches", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
});

test("every destination loads directly with an image and travel content", async ({
  page,
}, testInfo) => {
  for (const destination of destinations) {
    await page.goto(`/destinations/${destination.slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      destination.name,
    );
    await expect(page.locator(".detail-hero img")).toBeVisible();
    await expect
      .poll(() =>
        page
          .locator(".detail-hero img")
          .evaluate((image) => image.complete && image.naturalWidth > 0),
      )
      .toBe(true);
    await expect(
      page.getByRole("heading", { name: "A few tips before you go" }),
    ).toBeVisible();
    await expect(page.locator(".tag-list span")).toHaveCount(3);
    await noOverflow(page);
  }
  await page.goto("/destinations/rizal-shrine");
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Rizal Shrine",
  );
  await page.screenshot({
    path: `test-results/screenshots/${testInfo.project.name}-detail.png`,
    fullPage: true,
  });
  await page
    .getByRole("link", { name: "Back to Destinations", exact: true })
    .click();
  await expect(page).toHaveURL(/\/destinations$/);
  expect(await page.evaluate(() => window.scrollY)).toBeLessThan(5);
});

test("guide, about, credits, and custom 404 work without overflow", async ({
  page,
}, testInfo) => {
  for (const [path, heading] of [
    ["/travel-guide", "A little planning."],
    ["/about", "About"],
    ["/credits", "Stories have sources."],
    ["/missing-page", "Even good adventures"],
    ["/destinations/missing-place", "Even good adventures"],
  ]) {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      heading,
    );
    await expect(page.locator(".site-header")).toHaveClass(/header-solid/);
    await noOverflow(page);
  }
  await page.goto("/destinations");
  await page.screenshot({
    path: `test-results/screenshots/${testInfo.project.name}-destinations.png`,
    fullPage: true,
  });
  await page.goto("/credits");
  await expect(page.locator(".credits-grid article")).toHaveCount(11);
});
