import { baseRules } from "../rules/base";
import { jsonRules } from "../rules/json";
import { reactRules } from "../rules/react";
import { utilsRules } from "../rules/utils";

export const globalConfig = [
    ...baseRules,
    ...utilsRules,
    ...jsonRules,
    ...reactRules,
];
