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
      // Seed Our Work Page if empty
      const ourWorkPage = await strapi.documents('api::our-work-page.our-work-page').findFirst();
      if (!ourWorkPage) {
        console.log('Seeding Our Work Page content...');
        await strapi.documents('api::our-work-page.our-work-page').create({
          data: {
            heroEyebrow: 'Our Core Philosophy',
            heroTitle: "WE DON'T JUST RESTORE CORAL — WE RESTORE THE ENTIRE FOOD WEB.",
            heroDescription: 'Hui Nehu implements three tightly integrated programs that directly target the full ecological chain, from mountain watersheds to the open sea.',
            prog1Eyebrow: 'Program 1',
            prog1Title: 'Habitat & Loko Iʻa Restoration',
            prog1Description: 'Restoring estuarine habitats, coral reefs, and traditional fishponds (loko iʻa). Propagating thermal-tolerant coral and native limu using traditional cultivation and modern asexual propagation methods.',
            prog2Eyebrow: 'Program 2',
            prog2Title: 'Bio-Cleaner & Pollution Response',
            prog2Description: 'Addressing localized pollution at the source by deploying advanced septic systems and removing 10+ tons of marine debris in Year 1.',
            prog3Eyebrow: 'Program 3',
            prog3Title: 'Nā Kiaʻi Kai Community Science',
            prog3Description: 'Training local community volunteers to conduct professional fish surveys, monitor limu growth, and execute rigorous water quality testing.',
            trophicTitle: 'The Trophic Cascade',
            trophicDescription: 'Restoring foundational marine habitats creates a positive trophic cascade that naturally revitalizes the broader coastal ecosystem. By protecting the nehu at the base and removing toxic land runoff at the source, we trigger a self-reinforcing recovery wave for ahi, seabirds, coral, and communities.',
            publishedAt: new Date(),
          },
          status: 'published',
        });
      }

      // Seed Crisis Page if empty
      const crisisPage = await strapi.documents('api::crisis-page.crisis-page').findFirst();
      const crisisPageDataToSeed = {
        
        sec1Eyebrow: 'Keystone species',
        sec1Title: 'The Nehu',
        sec1Subtitle: 'The Most Important Fish You’ve Never Heard Of',
        sec1Description: 'Encrasicholina purpurea — a small, silver anchovy endemic exclusively to the Hawaiian Islands. The foundational forage fish of the Hawaiian marine food web.',
        sec1GridTitle: 'Why the Nehu Matters',
        sec1Card1Title: 'Traditional Aku Fishery',
        sec1Card1Body: 'Primary live bait for traditional aku (skipjack tuna) pole-and-line fishery.',
        sec1Card2Title: 'Apex Food Web',
        sec1Card2Body: 'Critical food for ahi, ʻopelu, akule, dolphins, and seabirds.',
        sec1Card3Title: 'Estuarine Habitats',
        sec1Card3Body: 'Lives only in semi-enclosed bays — extremely vulnerable to nearshore pollution.',
        sec1Card4Title: 'Food Sovereignty',
        sec1Card4Body: 'No nehu = no aku fishery = no food sovereignty.',
        sec1Proverb: '“He aliʻi ka ʼaina, he kauwā ke kanaka.” — The land is chief; the people are its servants.',
        
        sec2Eyebrow: 'The hidden killer',
        sec2Title: 'The Cesspool Crisis',
        sec2Subtitle: '53 Million Gallons of Sewage Enter Hawaiʻi’s Ocean Every Single Day',
        sec2Description: 'Hawaiʻi has the most cesspools per capita of any state. Untreated human waste discharges into groundwater and flows directly into the ocean, destroying nearshore habitats.',
        sec2GridTitle: 'How Waste Destroys Nearshore Life',
        sec2Card1Title: 'Cesspool Density',
        sec2Card1Body: '88,000 cesspools statewide; 12,000+ on Maui alone.',
        sec2Card2Title: 'Pathogen Contamination',
        sec2Card2Body: 'Effluent carries nitrogen, phosphorus, bacteria, viruses.',
        sec2Card3Title: 'Coral Reef Suffocation',
        sec2Card3Body: 'Nutrient loading causes algal blooms killing coral reefs.',
        sec2Card4Title: 'Water Supply Threat',
        sec2Card4Body: '50% of private drinking water wells near cesspools test positive for fecal bacteria.',
        sec2Card5Title: 'Public Health Impact',
        sec2Card5Body: 'Hawaiʻi has the highest MRSA rates in the nation.',
        sec2LawBannerBody: 'Act 125 (2017) mandates all 88,000 cesspools converted by 2050. Current rate: ~300/year. Required rate: 3,000+/year — a 10x acceleration needed.',
        
        sec3Eyebrow: 'The gap in current efforts',
        sec3Title: 'A Fragmented Response',
        sec3Subtitle: 'Conservation in Hawaiʻi Is Fragmented, Underfunded, and Culturally Disconnected',
        sec3Description: '',
        sec3GridTitle: 'Why Traditional Conservation Falls Short',
        sec3Card1Title: '1. Fragmentation',
        sec3Card1Body: 'Organizations work in silos, leaving critical gaps.',
        sec3Card2Title: '2. Cultural Disconnect',
        sec3Card2Body: 'Programs lack Native Hawaiian ecological knowledge.',
        sec3Card3Title: '3. Funding Gap',
        sec3Card3Body: 'Conservation funding declined 23% since 2019.',
        sec3Proverb: 'No single organization has ever attempted to address the full system. Until now.',
        
        status: 'published',
      };

      if (!crisisPage) {
        console.log('Seeding Crisis Page content...');
        await strapi.documents('api::crisis-page.crisis-page').create({
          data: {
            ...crisisPageDataToSeed,
            publishedAt: new Date(),
          },
          status: 'published',
        });
      } else {
        console.log('Updating existing Crisis Page to explicitly populate new fields...');
        await strapi.documents('api::crisis-page.crisis-page').update({
          documentId: crisisPage.documentId,
          data: crisisPageDataToSeed,
        });
      }

      // Seed/Update Homepage
      const homepage = await strapi.documents('api::homepage.homepage').findFirst();
      if (!homepage) {
        console.log('Seeding Homepage content...');
        await strapi.documents('api::homepage.homepage').create({
          data: {
            heroSubtitle: 'Mālama ʼAīna. Mālama Wai. Mālama Kai. — Care for the Land. Care for the Water. Care for the Sea.',
            heroTitle: 'Protecting Hawaiʻi’s Ocean, From the Ground Up',
            heroDescription: 'A Maui-Based 501(c)(3) Marine Conservation Nonprofit — Est. 2023',
            heroPrimaryBtnText: 'Join the Hui',
            heroPrimaryBtnLink: '/get-involved',
            heroSecondaryBtnText: 'Learn About the Crisis',
            heroSecondaryBtnLink: '/the-crisis',
            heroTertiaryBtnText: 'Invest in Hawaiʻi’s Ocean',
            heroTertiaryBtnLink: '/get-involved#invest',
            crisisLabel: 'The Hook (Urgency Block)',
            crisisTitle: 'Hawaiʻi’s reefs are dying and the window to act is closing fast. 84% of the world’s coral reefs bleached this year. The nehu — Hawaiʻi’s tiny endemic anchovy — is the foundation of this entire food web. When it disappears, the whole system collapses.',
            crisisBody: '53 million gallons of sewage enter Hawaiʻi’s ocean every single day — from 88,000 cesspools statewide. Most people have no idea.',
            solutionLabel: 'Three Program Overview Cards',
            solutionTitle: 'Hui Nehu is the first community-led, whole-system marine conservation organization in Hawaiʻi. We don’t just restore coral — we restore the entire food web. Our model is the ahupuaʻa made operational.',
            solutionProg1Emoji: '🪸',
            solutionProg1Title: 'Habitat & Loko Iʻa Restoration',
            solutionProg1Body: 'Restoring estuarine habitats, coral reefs, and traditional fishponds. Propagating thermal-tolerant coral and native limu.',
            solutionProg2Emoji: '🌊',
            solutionProg2Title: 'Bio-Cleaner & Pollution Response',
            solutionProg2Body: 'Deploying advanced septic systems. Removing marine debris. Target: 10+ tons in Year 1.',
            solutionProg3Emoji: '🔬',
            solutionProg3Title: 'Nā Kiaʻi Kai Community Science',
            solutionProg3Body: 'Training local volunteers in fish surveys, limu monitoring, and water quality testing to produce publication-quality datasets.',
            publishedAt: new Date(),
          },
          status: 'published',
        });
      } else {
        console.log('Updating Homepage content...');
        await strapi.documents('api::homepage.homepage').update({
          documentId: homepage.documentId,
          data: {
            heroSubtitle: 'Mālama ʼAīna. Mālama Wai. Mālama Kai. — Care for the Land. Care for the Water. Care for the Sea.',
            heroTitle: 'Protecting Hawaiʻi’s Ocean, From the Ground Up',
            heroDescription: 'A Maui-Based 501(c)(3) Marine Conservation Nonprofit — Est. 2023',
            heroPrimaryBtnText: 'Join the Hui',
            heroPrimaryBtnLink: '/get-involved',
            heroSecondaryBtnText: 'Learn About the Crisis',
            heroSecondaryBtnLink: '/the-crisis',
            heroTertiaryBtnText: 'Invest in Hawaiʻi’s Ocean',
            heroTertiaryBtnLink: '/get-involved#invest',
            crisisLabel: 'The Hook',
            crisisTitle: 'Hawaiʻi’s reefs are dying and the window to act is closing fast. 84% of the world’s coral reefs bleached this year. The nehu — Hawaiʻi’s tiny endemic anchovy — is the foundation of this entire food web. When it disappears, the whole system collapses.',
            crisisBody: '53 million gallons of sewage enter Hawaiʻi’s ocean every single day — from 88,000 cesspools statewide. Most people have no idea.',
            solutionLabel: 'Three Program Overview Cards',
            solutionTitle: 'Hui Nehu is the first community-led, whole-system marine conservation organization in Hawaiʻi. We don’t just restore coral — we restore the entire food web. Our model is the ahupuaʻa made operational.',
            solutionProg1Emoji: '🪸',
            solutionProg1Title: 'Habitat & Loko Iʻa Restoration',
            solutionProg1Body: 'Restoring estuarine habitats, coral reefs, and traditional fishponds. Propagating thermal-tolerant coral and native limu.',
            solutionProg2Emoji: '🌊',
            solutionProg2Title: 'Bio-Cleaner & Pollution Response',
            solutionProg2Body: 'Deploying advanced septic systems. Removing marine debris. Target: 10+ tons in Year 1.',
            solutionProg3Emoji: '🔬',
            solutionProg3Title: 'Nā Kiaʻi Kai Community Science',
            solutionProg3Body: 'Training local volunteers in fish surveys, limu monitoring, and water quality testing to produce publication-quality datasets.',
          }
        });
      }
    } catch (err) {
      console.error('Error seeding Strapi database:', err);
    }
  },
};
