const t = window.TrelloPowerUp.iFrame();

const defaultUnit = (locale) => {
    if (locale === "en-US") {
        return "imperial";
    }
    return "metric";
};

const metricBtn = document.querySelector("#metric");
const imperialBtn = document.querySelector("#imperial")

t.render(() => {
    return t
        .get("member", "private", "units", defaultUnit(t.getContext().locale))
        .then(unitPreference => {

        });
});
