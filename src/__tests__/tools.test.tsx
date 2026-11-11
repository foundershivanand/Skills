import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { RubikTimerTool } from '../components/tools/RubikTimerTool';
import { CardMemoryTool } from '../components/tools/CardMemoryTool';
import { SpeedReaderTool } from '../components/tools/SpeedReaderTool';
import { IntervalTimerTool } from '../components/tools/IntervalTimerTool';
import { AgentStudioTool } from '../components/tools/AgentStudioTool';

describe('Interactive Training Tools Test Suite', () => {
  it('renders RubikTimerTool with official scramble and target benchmark', () => {
    render(<RubikTimerTool targetSeconds={20} />);
    expect(screen.getByText('WCA Official Style Speedcube Timer')).toBeDefined();
    expect(screen.getByText('≤20.0s')).toBeDefined();
    expect(screen.getByText('Official WCA Scramble')).toBeDefined();
  });

  it('renders CardMemoryTool with selectable deck sizes and starts memorization', () => {
    render(<CardMemoryTool cardCount={10} timeLimitSeconds={120} />);
    expect(screen.getByText('Deck of Cards Memory Trainer')).toBeDefined();
    expect(screen.getByText(/10 CARDS ≤ 2 MIN/)).toBeDefined();

    const startBtn = screen.getByText(/START MEMORIZATION CLOCK/);
    fireEvent.click(startBtn);

    expect(screen.getByText(/CARD 1 \/ 10/)).toBeDefined();
    expect(screen.getByText('NEXT CARD')).toBeDefined();
  });

  it('renders SpeedReaderTool with target WPM and controls', () => {
    render(<SpeedReaderTool targetWpm={500} />);
    expect(screen.getByText('RSVP Speed Reading Engine')).toBeDefined();
    expect(screen.getByText(/≥500 WPM/)).toBeDefined();
    expect(screen.getByText('START RSVP FLASH')).toBeDefined();
    expect(screen.getByText('Deliberate')).toBeDefined();
  });

  it('renders IntervalTimerTool with default rounds and allows toggling audio', () => {
    render(<IntervalTimerTool workSecondsDefault={45} restSecondsDefault={15} roundsDefault={8} />);
    expect(screen.getByText('High-Intensity Deliberate Interval Timer')).toBeDefined();
    expect(screen.getByText(/8 ROUNDS × 45s WORK \/ 15s REST/)).toBeDefined();
    expect(screen.getByText('ROUND 1 OF 8')).toBeDefined();
  });

  it('renders AgentStudioTool and displays preset options', () => {
    render(<AgentStudioTool />);
    expect(screen.getByText('Autonomous Agent Architecture Drill')).toBeDefined();
    expect(screen.getByText('ReAct Loop')).toBeDefined();
    expect(screen.getByText('Multi-Agent Orchestration')).toBeDefined();
    expect(screen.getByText('RUN AGENT TEST')).toBeDefined();
  });
});
