import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

//Use Ctrl+H to toggle DockMonitor visibility
const DevTools = createDevTools(
    <DockMonitor
        toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-q'
        defaultIsVisible={false}
    >
        <LogMonitor theme='tomorrow' />
    </DockMonitor>
);

export default DevTools;
