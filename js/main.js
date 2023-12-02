const root1 = document.querySelector('ul#root');

const setFirstItemClassName3 = (level, ul) => {

    const liFirst = ul.querySelector('li:first-of-type');
    liFirst.classList.add('first');
    const liOriginArray = [...ul.children];

liOriginArray.forEach(li => {

        const innerUls = [...li.children];
    
        innerUls.forEach(innerUl => setFirstItemClassName3(level, innerUl))
    });

};

setFirstItemClassName3(1, root1);

const root2 = document.querySelector('ul#root');

const setLastItemClassName = (level, ul) => {

    const liLast = ul.querySelectorAll('li:last-of-type');
    for (let last of liLast) {
        last.classList.add('last');
      }
    
    const liOriginArray = [...ul.children];

liOriginArray.forEach(li => {

        const innerUls = [...li.children];
    
        innerUls.forEach(innerUl => setLastItemClassName(level, innerUl))
    });

};

setLastItemClassName(1, root2);



