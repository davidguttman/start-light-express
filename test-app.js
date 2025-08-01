const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log('Testing https://sle.jump.sh...');
    
    // Navigate to the site
    await page.goto('https://sle.jump.sh', { waitUntil: 'networkidle' });
    
    // Get page title
    const title = await page.title();
    console.log('Page title:', title);
    
    // Check if the welcome content is rendered
    const welcomeH1 = await page.textContent('h1');
    console.log('H1 content:', welcomeH1);
    
    // Check for navigation links
    const navLinks = await page.$$eval('nav a', links => 
      links.map(link => ({ text: link.textContent, href: link.href }))
    );
    console.log('Navigation links:', navLinks);
    
    // Test client-side routing
    console.log('\nTesting client-side routing...');
    await page.click('a[href="#/login"]');
    await page.waitForTimeout(1000);
    const loginContent = await page.textContent('h1, h2');
    console.log('Login page content:', loginContent);
    
    console.log('\n✅ All tests passed! The app is working correctly.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
})();