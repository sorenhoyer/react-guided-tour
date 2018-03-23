import React, { Component } from 'react';
import 'hopscotch/dist/css/hopscotch.css';
import { HopscotchContext, StartButton, escapeHtml } from 'react-guided-tour';

export default class App extends Component {
  render () {

    const steps = [
      {
        title: 'Step 1',
        content: 'This is step 1',
        target: 'step1',
        placement: 'bottom',
      },
      {
        title: 'Step 2',
        content: '<p>This is <strong>step 2</strong></p>',
        target: 'step2',
        placement: 'top',
      }
    ];

    const customRenderer = (data) => {
      const { buttons, i18n, step, tour } = data;
      const optEscape = (str, unsafe) => unsafe ? escapeHtml(str) : str;

      return `
        <div class="hopscotch-bubble-container" style="width: ${step.width}px; padding: ${step.padding}px;">
          <div class="hopscotch-bubble-header">
            ${ step.title !== '' ? `<h3 class="hopscotch-title">${optEscape(step.title, tour.unsafe)}</h3>` : ''}
            ${ buttons.showClose ? `<button class="hopscotch-bubble-close hopscotch-close">X</button>` : '' }
          </div>
          ${ tour.isTour ? `<div class="progressbar-outer"><div class="progressbar-inner" style="width:${((step.num + 1) / tour.numSteps) * 100}%;"></div></div>` : '' }
          <div class="hopscotch-bubble-content">
            ${ step.content !== '' ? `<div class="hopscotch-content">${optEscape(step.content, tour.unsafe)}</div>` : ''}
          </div>
          <div class="hopscotch-actions">
            ${ buttons.showPrev ? `<button class="hopscotch-nav-button prev hopscotch-prev">&#60; ${i18n.prevBtn}</button>` : '' }
            ${ buttons.showCTA ? `<button class="hopscotch-nav-button next hopscotch-cta">${buttons.ctaLabel}</button>` : '' }
            ${ buttons.showNext ? `<button class="hopscotch-nav-button next hopscotch-next">${i18n.nextBtn} ${step.isLast ? '&#10004;' : '&#62;'}</button>` : '' }
          </div>
        </div>
        <div class="hopscotch-bubble-arrow-container hopscotch-arrow">
          <div class="hopscotch-bubble-arrow-border"></div>
          <div class="hopscotch-bubble-arrow"></div>
        </div>`;
    };

    return (
      <div id="app">
        <HopscotchContext
          id="appTour"
          steps={steps}
          customRenderer={customRenderer}
          showPrevButton={true}
        >
          <StartButton>Help</StartButton>
        </HopscotchContext>
        <div id="container">
          <div id="left">
            <div id="step1"></div>
          </div>
          <div id="right">
            <div id="step2"></div>
          </div>
        </div>
      </div>
    )
  }
}
