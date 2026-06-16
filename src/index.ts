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
      if (!crisisPage) {
        console.log('Seeding Crisis Page content...');
        await strapi.documents('api::crisis-page.crisis-page').create({
          data: {
            eyebrow: 'Ecosystem Emergency',
            title: 'The Connected Crisis',
            subtitle: 'Conservation funding in Hawaiʻi has experienced a sharp 23% decline since 2019, compounding an already severe ecological emergency.',
            description: 'Our nearshore waters face three interlocking threats: the collapse of the foundational nehu food web, devastating nutrient pollution from cesspools, and a fragmented conservation response that remains detached from traditional practices.',
            sec1Eyebrow: 'Section 1: Forage Base',
            sec1Title: 'The Nehu: The Most Important Fish You’ve Never Heard Of',
            sec1Subtitle: '',
            sec1Description: 'Encrasicholina purpurea — a small, silver anchovy endemic exclusively to the Hawaiian Islands. The foundational forage fish of the Hawaiian marine food web. Lives only in semi-enclosed bays, making nehu populations extremely vulnerable to nearshore pollution.',
            sec2Eyebrow: 'Section 2: Sewage & Reefs',
            sec2Title: 'The Cesspool Crisis: The Hidden Killer',
            sec2Subtitle: '',
            sec2Description: 'Hawaiʻi has the most cesspools per capita of any state. Untreated human waste discharges into groundwater and flows directly into the ocean, destroying nearshore habitats. Act 125 (2017) mandates all 88,000 cesspools converted by 2050, requiring a 10x acceleration to convert 3,000+ per year instead of the current 300.',
            sec3Eyebrow: 'Section 3: Governance Gaps',
            sec3Title: 'Conservation in Hawaiʻi Is Fragmented, Underfunded, and Culturally Disconnected',
            sec3Subtitle: '',
            sec3Description: 'Traditional conservation efforts are currently isolated, underfunded, and fundamentally detached from local, Indigenous ecological practices, allowing critical structural gaps to persist. No single organization has ever attempted to address the full system. Until now.',
            publishedAt: new Date(),
          },
          status: 'published',
        });
      } else {
        console.log('Updating existing Crisis Page section titles to ensure consistency...');
        await strapi.documents('api::crisis-page.crisis-page').update({
          documentId: crisisPage.documentId,
          data: {
            sec3Title: 'Conservation in Hawaiʻi Is Fragmented, Underfunded, and Culturally Disconnected',
          },
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
          }
        });
      }
    } catch (err) {
      console.error('Error seeding Strapi database:', err);
    }
  },
};
