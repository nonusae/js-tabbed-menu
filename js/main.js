const tabList = document.querySelector('.jsTabList')

tabList.addEventListener('click', e => {
  if (!e.target.matches('a')) { return }
  event.preventDefault();

  const link = e.target
  const href = link.getAttribute('href')
  const component = tabList.parentNode;

  const previousTabsAndContents = component.querySelectorAll('.is-selected')
  previousTabsAndContents.forEach( elem => elem.classList.remove('is-selected'))

  const targetTab = link.parentNode
  const targetTabContent = component.querySelector(href);
  targetTab.classList.add('is-selected')
  targetTabContent.classList.add('is-selected')
})