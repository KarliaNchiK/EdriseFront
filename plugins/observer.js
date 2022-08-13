let linkObserver, bv1 = true;

export default async function (context, inject) {
    let promise = new Promise((resolve, reject) => {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // console.log(entry);
                if (context.store.getters["device/mobile"]) {
                    observeEntryMobile(entry.target, entry.isIntersecting, context.store);
                }
                else {
                    observeEntryDesk(entry.target, entry.isIntersecting, context.store);
                }
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

function observeEntryMobile(target, visible, $store) {
    switch (target.id) {
        case "firstPart":
            if (visible) {
                $store.commit("data/set_mobileMorph", 0);
            }
            break;
        case "secondPart1":
            if (visible) {
                $store.commit("data/set_mobileMorph", 1);
            }
            break;
        case "secondPart2":
            if (visible) {
                $store.commit("visible/set_visible", {
                    block: 'renderThree',
                    visible
                });
                linkObserver.unobserve(target);
            }
            break;

        case "threePart":
            if (visible) {
                $store.commit("data/set_mobileMorph", 2);
            }
            break;
    }
    return
}

function observeEntryDesk(target, visible, $store) {
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
        case "secondPart2":
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
        case "needAnim":
            if(visible){
                target.classList.add("active-anim")
            }
            else{
                target.classList.remove("active-anim")
            }
            break;
    }
    return
}