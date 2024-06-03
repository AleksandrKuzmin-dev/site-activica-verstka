function setMobileMenu(triggerSelector, modalSelector, modalShowSelector, closeSelector) {
    const trigger = document.querySelector(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        body = document.querySelector('body');

    let isOpen = false;

    const openModal = () => {
        body.style.overflow = 'hidden';
        modal.classList.add(modalShowSelector);
    };

    const closeModal = () => {
        modal.classList.remove(modalShowSelector);
        body.style.overflow = 'unset';
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            closeModal();
        }
    });

    trigger.addEventListener('click', openModal);
    close.addEventListener('click', closeModal);
}

function setTabs(tabsSelector, activeTabSelector, contentSelector) {
    const tabsElements = document.querySelectorAll(tabsSelector),
        contentElements = document.querySelectorAll(contentSelector);

    let lastContent = contentElements[0];
    let lastTab = tabsElements[0];

    tabsElements.forEach((item, index) => {
        contentElements[index].classList.add('fadeOutFromNone');
        item.addEventListener('click', () => {
            lastContent.classList.add('none');
            lastTab.classList.remove(activeTabSelector.replace(/[.]/g, ''));

            tabsElements[index].classList.add(activeTabSelector.replace(/[.]/g, ''));
            contentElements[index].classList.remove('none');

            lastTab = tabsElements[index];
            lastContent = contentElements[index];
        });
    });
}

function setZoomGallery(imgSelector) {
    const triggers = document.querySelectorAll(imgSelector),
        modal = document.querySelector('.modal-gallery'),
        modalImg = document.querySelector('.modal-gallery__img'),
        body = document.querySelector('body');

    let isOpen = false;

    const showModal = () => {
        modal.classList.remove('none');
        isOpen = true;
        body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.add('none');
        isOpen = false;
        body.style.overflow = 'unset';
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            closeModal();
        }
    });

    modal.addEventListener('click', (e) => {
        closeModal();
    });

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const imgSrc = trigger.src;
            const altImg = trigger.alt;

            modalImg.src = imgSrc;
            modalImg.alt = altImg;

            showModal();
        });
    });
}


function setFaqCards(cardSelector, triggerSelector, activeSelector, answerSelector) {
    const cards = document.querySelectorAll(cardSelector);


    cards.forEach((card) => {
        const trigger = card.querySelector(triggerSelector);
        const answer = card.querySelector(answerSelector);

        trigger.addEventListener('click', () => {
            answer.classList.toggle('none');
            trigger.classList.toggle(activeSelector);
        });
    });
}


function setModal(triggerSelector, modalSelector, closeSelector, timerValue) {
    const triggers = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          body = document.querySelector('body'),
          video = modal.querySelector('video');
    
    let isOpen = false;
    let timeOut = null;

    const showModal = () => {
        modal.classList.remove('none');
        isOpen = true;
        body.style.overflow = 'hidden';
        timeOut = null;
        video && video.play();
    };

    const closeModal = () => {
        modal.classList.add('none');
        isOpen = false;
        body.style.overflow = 'unset';
        video && video.pause();
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            closeModal();
        };
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })

    if (triggers) {
        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                showModal();

                const close = modal.querySelector(closeSelector);
                
                close.addEventListener('click', () => {
                    closeModal();
                });

            });
        })
    };

    

    if (timerValue) {
        timeOut = setTimeout(() => {
            showModal();
        }, timerValue);
    };
};


function setFilters(btnFiltersSelector, btnActiveFilterSelector, imagesSelector) {
    const buttons = document.querySelectorAll(btnFiltersSelector);
    const images = document.querySelectorAll(imagesSelector);

    let currentFilter = 'all';
    let lastActiveBtn = buttons[0];

    images.forEach(img => {
        img.classList.add('fadeOutFromNone');
    })

    const changeCurrentFilter = (e) => {
        lastActiveBtn.classList.remove(btnActiveFilterSelector);
        e.target.classList.add(btnActiveFilterSelector);
        
        lastActiveBtn = e.target;
        currentFilter = e.target.getAttribute('data-tab-category');

        images.forEach(img => {
            const category = img.getAttribute('data-tab-category');

            currentFilter === category || currentFilter === 'all' ? img.classList.remove('none') : img.classList.add('none');
        })
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', changeCurrentFilter);
    })



}