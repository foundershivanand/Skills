export interface EcosystemLink {
  id: string;
  name: string;
  url: string;
  description: string;
  type: 'Cloudflare Pages' | 'Cloudflare Worker';
  category: string;
  isCurrentProject?: boolean;
}

export const ALL_ECOSYSTEM_LINKS: EcosystemLink[] = [
  {
    id: 'project-manage',
    name: 'Project Manage',
    url: 'https://project-manage-z6u.pages.dev/',
    description: 'Project and task workflow management platform.',
    type: 'Cloudflare Pages',
    category: 'Management'
  },
  {
    id: 'reusable',
    name: 'Reusable Components',
    url: 'https://reusable-dpy.pages.dev/',
    description: 'Modular UI component system and reusable design blocks.',
    type: 'Cloudflare Pages',
    category: 'Design System'
  },
  {
    id: 'launchpilot',
    name: 'LaunchPilot',
    url: 'https://launchpilot.foundershivanand.workers.dev/',
    description: 'Product deployment and launch orchestration suite.',
    type: 'Cloudflare Worker',
    category: 'Deployment'
  },
  {
    id: 'finder',
    name: 'Finder',
    url: 'https://finder-d17.pages.dev/',
    description: 'Smart discovery, searching, and asset indexing engine.',
    type: 'Cloudflare Pages',
    category: 'Search & Index'
  },
  {
    id: 'skillforge',
    name: 'SkillForge',
    url: 'https://skillforge-i9b.pages.dev/',
    description: 'Deliberate practice skill training operating system.',
    type: 'Cloudflare Pages',
    category: 'Training System',
    isCurrentProject: true // Current project link to exclude from the popup
  },
  {
    id: 'content-os',
    name: 'Content OS',
    url: 'https://content-os.foundershivanand.workers.dev/',
    description: 'Multi-channel content creation, workflow, and pipeline engine.',
    type: 'Cloudflare Worker',
    category: 'Content Pipeline'
  },
  {
    id: 'second-brain',
    name: 'Second Brain',
    url: 'https://second-brain-web-d8x.pages.dev/',
    description: 'Knowledge repository, cognitive notes, and memory palace.',
    type: 'Cloudflare Pages',
    category: 'Knowledge Base'
  },
  {
    id: 'setup-factory',
    name: 'Setup Factory',
    url: 'https://setup-factory.pages.dev/',
    description: 'Workspace configuration and environment bootstrapping hub.',
    type: 'Cloudflare Pages',
    category: 'DevOps'
  },
  {
    id: 'mentor-api',
    name: 'Mentor API',
    url: 'https://mentor-api.foundershivanand.workers.dev/',
    description: 'Autonomous AI mentorship and deliberate practice feedback service.',
    type: 'Cloudflare Worker',
    category: 'AI Services'
  }
];

/**
 * Returns all ecosystem links excluding the current project (SkillForge).
 */
export const getFilteredEcosystemLinks = (): EcosystemLink[] => {
  return ALL_ECOSYSTEM_LINKS.filter(
    link => !link.isCurrentProject && !link.url.toLowerCase().includes('skillforge')
  );
};
