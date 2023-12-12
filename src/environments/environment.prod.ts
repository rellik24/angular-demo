export const environment = {
    production: true,
    budgets: [
        {
            type: "initial",
            maximumWarning: "500kb",
            maximumError: "1mb"
        },
        {
            type: "anyComponentStyle",
            maximumWarning: "2kb",
            maximumError: "4kb"
        }
    ],
    outputHashing: "all"
};
