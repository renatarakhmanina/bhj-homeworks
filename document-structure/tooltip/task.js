const links = document.querySelectorAll('.has-tooltip');
let currentTooltip = null;

function closeTooltip() {
  if (currentTooltip) {
    currentTooltip.remove();
    currentTooltip = null;
  }
}

function openTooltip(link) {
  closeTooltip();
  link.insertAdjacentHTML('afterEnd', `<div class='tooltip'>${link.title}</div>`);
  const tooltip = document.querySelector('.tooltip');
  const linkRect = link.getBoundingClientRect();
  tooltip.style.top = `${linkRect.bottom}px`;
  tooltip.style.left = `${linkRect.left}px`;
  tooltip.classList.add('tooltip_active');
  currentTooltip = tooltip;
}

function handleClick(e) {
  const target = e.target;
  if (target.classList.contains('has-tooltip')) {
    e.preventDefault();
    openTooltip(target);
  } else if (!target.closest('.tooltip')) {
    closeTooltip();
  }
}

links.forEach(link => link.addEventListener('click', handleClick));
document.addEventListener('click', handleClick);
window.addEventListener('scroll', () => {
  if (currentTooltip) {
    closeTooltip();
  }
});
