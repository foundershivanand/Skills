import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ALL_ECOSYSTEM_LINKS, getFilteredEcosystemLinks } from '../data/ecosystemLinks';
import { AllLinksModal } from '../components/AllLinksModal';
import { App } from '../App';

describe('Ecosystem Links Data and Modal Test Suite', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('contains all 9 provided URLs in master list and excludes SkillForge in filtered list', () => {
    // 9 total URLs
    expect(ALL_ECOSYSTEM_LINKS).toHaveLength(9);

    const urls = ALL_ECOSYSTEM_LINKS.map(l => l.url);
    expect(urls).toContain('https://project-manage-z6u.pages.dev/');
    expect(urls).toContain('https://reusable-dpy.pages.dev/');
    expect(urls).toContain('https://launchpilot.foundershivanand.workers.dev/');
    expect(urls).toContain('https://finder-d17.pages.dev/');
    expect(urls).toContain('https://skillforge-i9b.pages.dev/');
    expect(urls).toContain('https://content-os.foundershivanand.workers.dev/');
    expect(urls).toContain('https://second-brain-web-d8x.pages.dev/');
    expect(urls).toContain('https://setup-factory.pages.dev/');
    expect(urls).toContain('https://mentor-api.foundershivanand.workers.dev/');

    // Filtered list must have exactly 8 links and MUST NOT have skillforge
    const filtered = getFilteredEcosystemLinks();
    expect(filtered).toHaveLength(8);
    const filteredUrls = filtered.map(l => l.url);
    expect(filteredUrls).not.toContain('https://skillforge-i9b.pages.dev/');
    expect(filtered.every(l => !l.url.includes('skillforge'))).toBe(true);
  });

  it('does not render when isOpen is false', () => {
    render(<AllLinksModal isOpen={false} onClose={() => {}} />);
    expect(screen.queryByText(/ALL LINKS \/\/ ECOSYSTEM REGISTRY/i)).toBeNull();
  });

  it('renders all 8 links and explicitly displays exclusion banner when isOpen is true', () => {
    render(<AllLinksModal isOpen={true} onClose={() => {}} />);

    expect(screen.getByText(/ALL LINKS \/\/ ECOSYSTEM REGISTRY/i)).toBeDefined();
    expect(screen.getByText(/EXCLUSION FILTER ACTIVE/i)).toBeDefined();
    expect(screen.getByText('8 LINKS')).toBeDefined();

    // Verify all 8 other links are displayed
    expect(screen.getByText('Project Manage')).toBeDefined();
    expect(screen.getByText('Reusable Components')).toBeDefined();
    expect(screen.getByText('LaunchPilot')).toBeDefined();
    expect(screen.getByText('Finder')).toBeDefined();
    expect(screen.getByText('Content OS')).toBeDefined();
    expect(screen.getByText('Second Brain')).toBeDefined();
    expect(screen.getByText('Setup Factory')).toBeDefined();
    expect(screen.getByText('Mentor API')).toBeDefined();

    // Current project link must NOT be in the card list
    expect(screen.queryByText('skillforge-i9b.pages.dev/')).toBeNull();
  });

  it('filters links using the search input', () => {
    render(<AllLinksModal isOpen={true} onClose={() => {}} />);

    const searchInput = screen.getByPlaceholderText(/Search links by name, URL, tag, or description/i);
    fireEvent.change(searchInput, { target: { value: 'mentor' } });

    expect(screen.getByText('Mentor API')).toBeDefined();
    expect(screen.queryByText('Project Manage')).toBeNull();
    expect(screen.queryByText('LaunchPilot')).toBeNull();
  });

  it('copies link to clipboard when COPY is clicked', async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    render(<AllLinksModal isOpen={true} onClose={() => {}} />);

    const copyButtons = screen.getAllByRole('button', { name: /copy/i });
    fireEvent.click(copyButtons[0]);

    expect(writeTextMock).toHaveBeenCalled();
  });

  it('triggers onClose when close button or backdrop is clicked or Escape key pressed', () => {
    const handleClose = vi.fn();
    const { rerender } = render(<AllLinksModal isOpen={true} onClose={handleClose} />);

    // Click CLOSE button
    const closeBtn = screen.getByRole('button', { name: 'CLOSE' });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);

    // Press Escape
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(2);
  });

  it('integrates seamlessly with App and opens modal via Navigation ALL LINKS button', () => {
    render(<App />);

    // Find ALL LINKS buttons in navigation
    const allLinksButtons = screen.getAllByRole('button', { name: /all links/i });
    expect(allLinksButtons.length).toBeGreaterThan(0);

    // Click the first ALL LINKS button
    fireEvent.click(allLinksButtons[0]);

    // Modal should now be open
    expect(screen.getByText(/ALL LINKS \/\/ ECOSYSTEM REGISTRY/i)).toBeDefined();
    expect(screen.getByText('Project Manage')).toBeDefined();
    expect(screen.getByText('Mentor API')).toBeDefined();

    // Close the modal
    const closeButton = screen.getByRole('button', { name: 'CLOSE' });
    fireEvent.click(closeButton);

    expect(screen.queryByText(/ALL LINKS \/\/ ECOSYSTEM REGISTRY/i)).toBeNull();
  });
});
