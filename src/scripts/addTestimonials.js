const fs = require('fs');
const path = require('path');

const pages = [
  'bathroom-remodeling',
  'commercial-plumbing',
  'drain-cleaning',
  'emergency-plumbing',
  'faucet-installation',
  'gas-line-repair',
  'hvac-services',
  'kitchen-plumbing',
  'leak-detection',
  'pipe-replacement',
  'sewer-line-repair',
  'sump-pump',
  'toilet-repair',
  'water-filtration',
  'water-heater-repair'
];

const dir = './src/app/services';

pages.forEach((slug) => {
  const file = path.join(dir, `${slug}.tsx`);
  if (!fs.existsSync(file)) {
    console.warn(`❌ File not found: ${slug}.tsx`);
    return;
  }

  let content = fs.readFileSync(file, 'utf8');

  // 1. Add import if not already present
  if (!content.includes("import Testimonials from '@/app/components/Testimonials'")) {
    const firstImportEnd = content.indexOf('\n', content.indexOf('import'));
    content =
      content.slice(0, firstImportEnd + 1) +
      "import Testimonials from '@/app/components/Testimonials';\n" +
      content.slice(firstImportEnd + 1);
  }

  // 2. Inject <Testimonials /> if not already there
  const testimonialTag = `<Testimonials service="${slug}" />`;
  if (!content.includes('<Testimonials')) {
    content = content.replace(/<\/main>/, `  ${testimonialTag}\n</main>`);
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`✅ Updated: ${slug}.tsx`);
});
