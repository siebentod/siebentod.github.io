function getFirstVisible() {
    const visible = (element) => {
      const rect = element?.getBoundingClientRect();
      if (!rect) return;
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    };
  
    let first;
    let firstOffY;
    let allVisible = Array.from(document.querySelectorAll(".mainText > *:not(.endOfColumn1 ~ *)")).filter(visible);
    for (var elem in allVisible) {
      elem = allVisible[elem];
      const offY =
        elem.getBoundingClientRect().top + document.documentElement.scrollTop;
      if (first == null || offY < firstOffY) {
        first = elem;
        firstOffY = offY;
      }
    }
    console.log(first.outerHTML);
    return first;
  }