import { initPainels } from './painels.js';
import { initSubtitleAnimation } from './subtitle-underline.js';
import { initLogoAnimation } from './logo-animation.js';
import { initMenuUnderline } from './menu-underline.js';
import { initParticles } from './particles.js';
import { initSelectPanels } from './select-panels.js';

document.addEventListener('DOMContentLoaded', () => {
  initPainels();
  initSubtitleAnimation();
  initLogoAnimation();
  initMenuUnderline();
  initParticles();
  initSelectPanels();
});
