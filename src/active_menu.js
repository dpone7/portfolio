const sectionIds = ['#home', '#about', '#work', '#contact'];
const sections = sectionIds.map((id) => document.querySelector(id));
// console.log('sections', sections);

const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
// console.log('navItems', navItems);

const visibleSections = sectionIds.map(() => false);

let activeNavItem = navItems[0];

const options = {
  rootMargin: '-20% 0px 0px 0px',
  threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section)); // 관찰

function observerCallback(entries) {
  let selectLastOne;

  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;
  });
  // console.log(visibleSections);
  // console.log('무조건 라스트 섹션', selectLastOne);

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersection(visibleSections);
  // console.log(sectionIds[navIndex]);

  selectNavItem(navIndex);
}

function findFirstIntersection(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return;
  activeNavItem.classList.remove('active');
  activeNavItem = navItem;
  activeNavItem.classList.add('active');
}
