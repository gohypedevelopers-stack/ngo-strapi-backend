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

      // Seed Our Work Sub Pages if empty or missing individually
      const subPageSlugs = ['habitat-loko-ia', 'bio-cleaner', 'community-science', 'methodology'];
      for (const slug of subPageSlugs) {
        const existing = await strapi.documents('api::our-work-sub-page.our-work-sub-page').findFirst({
          filters: { slug }
        });
        if (!existing) {
          console.log(`Seeding Our Work Sub Page: ${slug}...`);
          if (slug === 'habitat-loko-ia') {
            await strapi.documents('api::our-work-sub-page.our-work-sub-page').create({
              data: {
                slug: 'habitat-loko-ia',
                eyebrow: 'Program 1: Habitat & Loko Iʻa',
                title: 'We Don’t Just Restore Coral — We Restore the Entire Food Web',
                description: 'Restoring estuarine habitats, coral reefs, and traditional fishponds (loko iʻa). Propagating thermal-tolerant coral and native limu using traditional cultivation and modern asexual propagation methods.',
                card1Title: 'Keystone Focus',
                card1Body: 'Restoring foundational habitats triggers a trophic cascade that revitalizes the entire coastal ecosystem.',
                card2Title: 'Ahupuaʻa Link',
                card2Body: 'Ancient Hawaiians built 300+ fishponds (loko iʻa) and managed freshwater flow to protect downstream coral nurseries. We revive this 1,000-year-old wisdom.',
                metricLabel: 'Target Metric',
                metricValue: 70,
                metricSuffix: '%',
                metricDesc: 'Coral Survival Rate',
                metricDetail: 'Target for pilot sites — integrating Indigenous Ecological Knowledge with modern marine science to achieve unprecedented restoration outcomes.',
                publishedAt: new Date(),
              },
              status: 'published',
            });
          } else if (slug === 'bio-cleaner') {
            await strapi.documents('api::our-work-sub-page.our-work-sub-page').create({
              data: {
                slug: 'bio-cleaner',
                eyebrow: 'Program 2: Bio-Cleaner & Pollution Response',
                title: 'Bio Cleaner Septic Jockey: An Act of Mālama ʼAīna',
                description: 'Deploying advanced Bio Cleaner septic systems to replace cesspools. Removing marine debris from Maui’s coastline. Responding to acute pollution events.',
                card1Title: 'The Bigger Picture',
                card1Body: 'Bio Cleaner Septic Jockey is the commercial arm that directly funds the nonprofit’s conservation mission while addressing the cesspool crisis at scale.',
                metricLabel: 'Target Metric',
                metricValue: 10,
                metricSuffix: '+',
                metricDesc: 'Tons of Marine Debris Removed',
                metricDetail: 'Year 1 Target — deploying Bio Cleaner septic systems and coordinating coastline debris removal across Maui County.',
                publishedAt: new Date(),
              },
              status: 'published',
            });
          } else if (slug === 'community-science') {
            await strapi.documents('api::our-work-sub-page.our-work-sub-page').create({
              data: {
                slug: 'community-science',
                eyebrow: 'Program 3: Nā Kiaʻi Kai Community Science',
                title: 'Training Hawaiʻi’s Next Generation of Ocean Guardians',
                description: 'Training local volunteers in fish surveys, limu monitoring, and water quality testing to produce publication-quality datasets.',
                activity1Title: 'Fish surveys',
                activity1Body: 'Standardized visual censuses of nearshore reef fish species diversity and biomass tracking.',
                activity2Title: 'Limu monitoring',
                activity2Body: 'Tracking native and invasive seaweed distribution across shallow reef flats.',
                activity3Title: 'Water quality testing',
                activity3Body: 'Conducting regular chemical assays to monitor nutrient loading, pathogens, and runoff cycles.',
                activity4Title: 'Marine debris removal',
                activity4Body: 'Removing ghost nets, microplastics, and derelict gear from marine nurseries.',
                activity5Title: 'Coral outplanting',
                activity5Body: 'Assisting in asexual propagation and transplanting of thermal-tolerant coral colonies.',
                activity6Title: 'Youth ocean science education',
                activity6Body: 'Empowering future ocean guardians through field excursions and school partnerships.',
                metricLabel: 'Science & Policy',
                metricValue: 500,
                metricSuffix: '+',
                metricDesc: 'Water Samples Analyzed',
                metricDetail: 'Standardized community data collection informing state and federal policy. Publication-quality scientific output from volunteer-led monitoring.',
                publishedAt: new Date(),
              },
              status: 'published',
            });
          } else if (slug === 'methodology') {
            await strapi.documents('api::our-work-sub-page.our-work-sub-page').create({
              data: {
                slug: 'methodology',
                eyebrow: 'Our Methodology — The science behind the work',
                title: 'Indigenous Knowledge + Modern Science: The Most Effective Conservation',
                description: 'The most resilient conservation integrates the deep observational knowledge of Indigenous Hawaiian practitioners with peer-reviewed marine biology.',
                card1Title: 'The Ahupuaʻa Model',
                card1Body: 'Traditional Hawaiian land system from mountain peak (mauka) to ocean (makai). Kānāwai — “the equal sharing of water” — was the source of all wealth. Hui Nehu makes this operational in the 21st century.',
                activity1Title: 'Coral & Limu Propagation',
                activity1Body: 'Combining traditional cultivation with modern asexual propagation methods to rebuild foundational nearshore habitats.',
                activity2Title: 'Ahupuaʻa & Loko Iʻa Management',
                activity2Body: 'Fostering holistic watershed protection alongside ancestral fishpond revival to balance coastal ecosystems.',
                activity3Title: 'Citizen Science Rigor',
                activity3Body: 'Translating standardized community observations and data logs into robust scientific datasets accepted by policy makers.',
                metricLabel: 'Core Metric',
                metricValue: 70,
                metricSuffix: '%',
                metricDesc: 'Coral Survival Rate',
                metricDetail: 'Targeting 70% coral survival rate at pilot sites — above national average.',
                publishedAt: new Date(),
              },
              status: 'published',
            });
          }
        }
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
            sec3Title: 'A Fragmented Response: Siloed & Underfunded',
            sec3Subtitle: '',
            sec3Description: 'Traditional conservation efforts are currently isolated, underfunded, and fundamentally detached from local, Indigenous ecological practices, allowing critical structural gaps to persist. No single organization has ever attempted to address the full system. Until now.',
            publishedAt: new Date(),
          },
          status: 'published',
        });
      } else if (!crisisPage.sec1Title) {
        console.log('Updating Crisis Page with section content...');
        await strapi.documents('api::crisis-page.crisis-page').update({
          documentId: crisisPage.documentId,
          data: {
            sec1Eyebrow: 'Section 1: Forage Base',
            sec1Title: 'The Nehu: The Most Important Fish You’ve Never Heard Of',
            sec1Subtitle: '',
            sec1Description: 'Encrasicholina purpurea — a small, silver anchovy endemic exclusively to the Hawaiian Islands. The foundational forage fish of the Hawaiian marine food web. Lives only in semi-enclosed bays, making nehu populations extremely vulnerable to nearshore pollution.',
            sec2Eyebrow: 'Section 2: Sewage & Reefs',
            sec2Title: 'The Cesspool Crisis: The Hidden Killer',
            sec2Subtitle: '',
            sec2Description: 'Hawaiʻi has the most cesspools per capita of any state. Untreated human waste discharges into groundwater and flows directly into the ocean, destroying nearshore habitats. Act 125 (2017) mandates all 88,000 cesspools converted by 2050, requiring a 10x acceleration to convert 3,000+ per year instead of the current 300.',
            sec3Eyebrow: 'Section 3: Governance Gaps',
            sec3Title: 'A Fragmented Response: Siloed & Underfunded',
            sec3Subtitle: '',
            sec3Description: 'Traditional conservation efforts are currently isolated, underfunded, and fundamentally detached from local, Indigenous ecological practices, allowing critical structural gaps to persist. No single organization has ever attempted to address the full system. Until now.',
          },
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
