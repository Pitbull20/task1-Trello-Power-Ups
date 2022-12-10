const t = window.TrelloPowerUp.iframe();

const defaultUnit = (locale) => {
    if (locale === "en-US") {
        return "imperial";
    }
    return "metric";
};

const metricBtn = document.querySelector("#metric");
const imperialBtn = document.querySelector("#imperial");

document
    .querySelectorAll("input[type=radio][name=units]")
    .forEach((radioBtn) => {
        radioBtn.addEventListener("change", (e) => {
            t.set("member", "private", "units", e.target.value);
        });
    });

t.render(() => {
    return t
        .get("member", "private", "units", defaultUnit(t.getContext().locale))
        .then((unitPreference) => {
            if (unitPreference === "metric") {
                metricBtn.value = true;
            } else {
                imperialBtn.value = true;
            }
        });
});
