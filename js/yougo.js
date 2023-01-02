(() => {
  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $doc.querySelectorAll("[data-nav]");
  const $content = $doc.querySelectorAll("[data-content]");
  const ACTIVE_CLASS = "is-active";
  const navLen = $nav.length;
  const init = () => {
    $content[0].style.display = "block";
    console.log($nav);
  };
  init();

  const handleClick = (e) => {
    e.preventDefault();
    const $this = e.target;
    const targetVal = $this.dataset.nav;
    let index = 0;
    while (index < navLen) {
      $content[index].style.display = "none";
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }
    $tab.querySelectorAll(
      '[data-content="' + targetVal + '"]'
    )[0].style.display = "block";
    $nav[targetVal].classList.add(ACTIVE_CLASS);
  };
  let index = 0;
  while (index < navLen) {
    $nav[index].addEventListener("click", (e) => handleClick(e));
    index++;
  }
})();
