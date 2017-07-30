export class GlobalService {
    showAnimations(className) {
        const animateSelector = document.querySelectorAll(className);
        const keysCurrentObject = Object.keys(animateSelector);
        for (const index of keysCurrentObject) {
            const currentItem = animateSelector[index];
            const currentAttrTime = currentItem.getAttribute('data-animate-delay');
            const currentAttrClass = currentItem.getAttribute('data-animate-class');
            this.setTimeToShow(currentItem, currentAttrTime, currentAttrClass);
        }
    }

    setTimeToShow(currentClass, time, selectedClass) {
        setTimeout(function () {
            currentClass.classList.add('animated', selectedClass);
        }, time);
    }

    changeMainBG(opacityNumber, state) {
        const selectorBG = document.getElementById('b-background');
        selectorBG.style.opacity = opacityNumber;
        if (state) {
            selectorBG.classList.remove('slide');
        }else {
            selectorBG.classList.add('slide');
        }
    }

    changeClassHtmlOnRoute(currentClass) {
        let mainHTML = document.getElementById('html');
        mainHTML.classList.remove('html-result', 'html-main');
        mainHTML.classList.add(currentClass)
    }

    initPlugins() {

    /*    $("select").select2({
            minimumResultsForSearch: Infinity,
            width: '100%'

        });*/
    }
}