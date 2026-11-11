import { describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../App';

describe('App Top-Level Integration Test Suite', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders top navigation and TODAY view by default', () => {
    render(<App />);
    expect(screen.getByText('SKILLFORGE')).toBeDefined();
    expect(screen.getByText('TRAIN. TEST. MASTER.')).toBeDefined();
    expect(screen.getByText(/WHAT ARE WE TRAINING TODAY\?/)).toBeDefined();
    expect(screen.getByText("TODAY'S ACTIVE DRILL QUEUE")).toBeDefined();
  });

  it('navigates between primary screens via navigation tabs', () => {
    render(<App />);

    // Click SKILLS tab
    const skillsTab = screen.getByText('SKILLS');
    fireEvent.click(skillsTab);
    expect(screen.getByText('THE 75 SKILLS')).toBeDefined();
    expect(screen.getByText('+ NEW SKILL ARCHITECT')).toBeDefined();

    // Click TRAIN tab
    const trainTab = screen.getByText('TRAIN');
    fireEvent.click(trainTab);
    expect(screen.getByText(/ACTIVE TRAINING CONSOLE/)).toBeDefined();
    expect(screen.getByText(/LEVEL PROGRESSION/)).toBeDefined();

    // Click PROGRESS tab
    const progressTab = screen.getByText('PROGRESS');
    fireEvent.click(progressTab);
    expect(screen.getByText('PROGRESS & BOTTLENECK AUDIT')).toBeDefined();
    expect(screen.getByText('FOUR-FACTOR BOTTLENECK MATRIX')).toBeDefined();
    expect(screen.getByText('SKILL PROOF LEDGER')).toBeDefined();

    // Click COACH tab
    const coachTab = screen.getByText('COACH');
    fireEvent.click(coachTab);
    expect(screen.getByText('BRUTAL AI COACHING CORE')).toBeDefined();
  });

  it('opens and closes the Quick Launch (I Have 30 Min) modal', () => {
    render(<App />);
    const quickLaunchBtn = screen.getAllByText('I HAVE 30 MIN')[0];
    fireEvent.click(quickLaunchBtn);

    expect(screen.getByText('TACTICAL SESSION DISPATCHER')).toBeDefined();
    expect(screen.getByText('TIME-BOXED DRILL ALLOCATION')).toBeDefined();

    const cancelBtn = screen.getByText('CANCEL');
    fireEvent.click(cancelBtn);

    expect(screen.queryByText('TACTICAL SESSION DISPATCHER')).toBeNull();
  });

  it('opens and closes the Settings Modal', () => {
    render(<App />);
    const settingsBtn = screen.getByText('AI CONFIG');
    fireEvent.click(settingsBtn);

    expect(screen.getByText('AI ENGINE CONFIGURATION')).toBeDefined();
    expect(screen.getByText('LOCAL-FIRST MULTI-AGENT ARCHITECTURE')).toBeDefined();

    const dismissBtn = screen.getByText('DISMISS');
    fireEvent.click(dismissBtn);

    expect(screen.queryByText('AI ENGINE CONFIGURATION')).toBeNull();
  });
});
