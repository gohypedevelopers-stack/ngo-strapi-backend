import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsProductFeature extends Struct.ComponentSchema {
  collectionName: 'components_sections_product_features';
  info: {
    displayName: 'Product Feature';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<
      ['settings', 'feather', 'tag', 'info', 'star', 'shield']
    > &
      Schema.Attribute.DefaultTo<'settings'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_members';
  info: {
    description: '';
    displayName: 'Team Member';
    icon: 'user';
  };
  attributes: {
    bio: Schema.Attribute.Text & Schema.Attribute.Required;
    initials: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.product-feature': SectionsProductFeature;
      'sections.team-member': SectionsTeamMember;
    }
  }
}
