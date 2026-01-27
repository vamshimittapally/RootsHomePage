from playwright.sync_api import sync_playwright, expect

def verify_app(page):
    page.goto("http://localhost:4173")

    # Check Hero
    expect(page.get_by_text("Intelligence is")).to_be_visible()

    # Check Method (Philosophy)
    expect(page.get_by_text("Raw Data")).to_be_visible()

    # Check Features - use heading to avoid strict mode violation
    expect(page.get_by_role("heading", name="The Anchor")).to_be_visible()

    # Check Manifesto
    expect(page.get_by_text("We are drowning in information")).to_be_visible()

    # Check Footer
    expect(page.get_by_text("Claim your space")).to_be_visible()

    # Take screenshot
    page.screenshot(path="verification/refactor_check.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_app(page)
            print("Verification passed!")
        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()
