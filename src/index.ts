// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: any }) {
    try {
      // Seed Crisis Page if empty
      const crisisPage = await strapi.documents('api::crisis-page.crisis-page').findFirst();
      if (!crisisPage) {
        console.log('Seeding Crisis Page content...');
        await strapi.documents('api::crisis-page.crisis-page').create({
          data: {
            eyebrow: 'Ecosystem Emergency',
            title: 'The Connected Crisis',
            subtitle: 'Conservation funding in Hawaiʻi has experienced a sharp 23% decline since 2019, compounding an already severe ecological emergency.',
            description: 'Our nearshore waters face three interlocking threats: the collapse of the foundational nehu food web, devastating nutrient pollution from cesspools, and a fragmented conservation response that remains detached from traditional practices.',
            publishedAt: new Date(),
          },
          status: 'published',
        });
      }

      // Seed Crisis Sub Pages if empty
      const subPages = await strapi.documents('api::crisis-sub-page.crisis-sub-page').findMany();
      if (!subPages || subPages.length === 0) {
        console.log('Seeding Crisis Sub Pages...');
        
        // 1. The Nehu
        await strapi.documents('api::crisis-sub-page.crisis-sub-page').create({
          data: {
            slug: 'the-nehu',
            eyebrow: 'Section 1: Keystone Species',
            title: 'The Most Important Fish You’ve Never Heard Of',
            subtitle: 'Encrasicholina purpurea — a small, silver anchovy endemic exclusively to the Hawaiian Islands.',
            description: 'The foundational forage fish of the Hawaiian marine food web. Lives only in semi-enclosed bays, making nehu populations extremely vulnerable to nearshore pollution.',
            proverb: '“He aliʻi ka ʼaina, he kauwā ke kanaka.” — The land is chief; the people are its servants.',
            stat1Value: 'Endemic',
            stat1Label: 'Encrasicholina purpurea — found exclusively in the Hawaiian Islands',
            stat2Value: 'Forage Base',
            stat2Label: 'Foundational forage fish of the Hawaiian food web',
            stat3Value: 'Vulnerable',
            stat3Label: 'Extremely vulnerable to nearshore pollution',
            card1Title: 'Traditional Aku Fishery',
            card1Body: 'Primary live bait for traditional aku (skipjack tuna) pole-and-line fishery. A vital link connecting local fishing heritage with marine resources.',
            card2Title: 'Apex Food Web',
            card2Body: 'Critical food for ahi, ʻopelu, akule, dolphins, and seabirds. The biological heartbeat of our nearshore marine ecosystems.',
            card3Title: 'Estuarine Habitats',
            card3Body: 'Lives only in semi-enclosed bays — extremely vulnerable to nearshore pollution, sedimentation, and coastal runoff.',
            card4Title: 'Food Sovereignty',
            card4Body: 'No nehu = no aku fishery = no food sovereignty. The collapse of this keystone species directly threatens local community food independence.',
            publishedAt: new Date(),
          },
          status: 'published',
        });

        // 2. Cesspool Problem
        await strapi.documents('api::crisis-sub-page.crisis-sub-page').create({
          data: {
            slug: 'cesspool-problem',
            eyebrow: 'Section 2: The Hidden Killer',
            title: '53 Million Gallons of Sewage Enter Hawaiʻi’s Ocean Every Single Day',
            subtitle: 'Hawaiʻi has the most cesspools per capita of any state. Untreated human waste discharges into groundwater and flows directly into the ocean, destroying nearshore habitats.',
            description: 'Act 125 (2017) mandates all 88,000 cesspools converted by 2050. Current rate: ~300/year. Required rate: 3,000+/year — a 10x acceleration needed.',
            stat1Value: '88,000',
            stat1Label: 'Cesspools statewide (12,000+ on Maui alone)',
            stat2Value: '53 Million',
            stat2Label: 'Gallons of untreated human waste discharged daily',
            stat3Value: '10x Acceleration',
            stat3Label: 'Required conversion rate of 3,000+/year vs 300 current rate',
            card1Title: 'Nutrient Loading & Coral Death',
            card1Body: 'Cesspool effluent introduces catastrophic levels of nitrogen and phosphorus. This nutrient loading triggers devastating algal blooms that suffocate and kill nearshore coral reefs.',
            card2Title: 'Pathogen Contamination',
            card2Body: 'Effluent discharges bacteria, viruses, and raw waste directly into aquifers. 50% of private drinking water wells near cesspools test positive for fecal bacteria contamination.',
            card3Title: 'Public Health (MRSA)',
            card3Body: 'Runoff in recreational waters directly impacts human safety, contributing to Hawaiʻi having the highest rates of community-acquired MRSA infections in the entire nation.',
            card4Title: 'Legislative Mandate (Act 125)',
            card4Body: 'Hawaiʻi State Act 125 (2017) legally mandates all 88,000 residential cesspools must be fully converted by 2050. Meeting this requires an immediate 10x acceleration.',
            publishedAt: new Date(),
          },
          status: 'published',
        });

        // 3. Fragmented Response
        await strapi.documents('api::crisis-sub-page.crisis-sub-page').create({
          data: {
            slug: 'fragmented-response',
            eyebrow: 'Section 3: Gaps in Conservation',
            title: 'Conservation in Hawaiʻi Is Fragmented, Underfunded, and Culturally Disconnected',
            subtitle: 'Traditional conservation efforts are currently isolated and fundamentally detached from local, Indigenous ecological practices, allowing critical structural gaps to persist.',
            description: 'No single organization has ever attempted to address the full system. Until now.',
            proverb: 'No single organization has ever attempted to address the full system. — Until now.',
            stat1Value: '-23%',
            stat1Label: 'Decline in marine conservation funding since 2019',
            stat2Value: 'Isolated Silos',
            stat2Label: 'Organizations working in isolated silos',
            stat3Value: 'Cultural Gap',
            stat3Label: 'Detached from Native Hawaiian ecological knowledge',
            card1Title: '1. Fragmentation',
            card1Body: 'Environmental organizations work inside isolated silos, leaving massive, unaddressed gaps in the coastal ecosystem chain.',
            card2Title: '2. Cultural Disconnect',
            card2Body: 'Conservation programs lack integration with Native Hawaiian ecological knowledge and traditional practices.',
            card3Title: '3. Funding Gap',
            card3Body: 'Available marine conservation funding across the islands has suffered a severe 23% decline since 2019.',
            publishedAt: new Date(),
          },
          status: 'published',
        });
      }
    } catch (err) {
      console.error('Error seeding Strapi database:', err);
    }
  },
};
