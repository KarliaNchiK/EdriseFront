let linkObserver, bv1 = true;

export default async function (context, inject) {
    let promise = new Promise((resolve, reject) => {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // console.log(entry);
                observeEntry(entry.target, entry.isIntersecting, context.store);
            });
        });
        resolve(observer)
    })
    promise.then((res) => {
        inject("observer", res)
        linkObserver = res
    })

    return
}

function observeEntry(target, visible, $store) {
    switch (target.id) {
        case "firstPart":
            bv1 = visible
            $store.commit("visible/set_visible", {
                block: 'bv1',
                visible
            });
            $store.commit("general/canvas/set_alternateCanvas", visible);
            break;
        case "secondPart":
            $store.commit("visible/set_visible", {
                block: 'bv2',
                visible
            });
            $store.commit("general/canvas/set_canvas", bv1 || visible);
            break;
        case "endSecondPart":
            if (visible) {
                $store.commit("visible/set_visible", {
                    block: 'renderThree',
                    visible
                });
                linkObserver.unobserve(target);
            }
            break;
        case "threePart":
            $store.commit("visible/set_visible", {
                block: 'bv3',
                visible
            });
            break;

        // case "needSCroll":
        //     if (visible) {
        //         target.classList.add("scrolling")
        //     }
        //     else {
        //         target.classList.remove("scrolling")
        //     }
        //     break;
        // default:
        //     if (visible) {
        //         target.classList.add("start-anim")
        //         linkObserver.unobserve(target);
        //     }
        //     break;

    }
    return
}