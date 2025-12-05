import { baseRules } from "../rules/base";
import { jsonRules } from "../rules/json";
import { reactRules } from "../rules/react";
import { reactForNextRules } from "../rules/react-for-next";
import { utilsRules } from "../rules/utils";

export const nextConfig = [
    ...baseRules,
    ...utilsRules,
    ...jsonRules,
    ...reactRules,
    ...reactForNextRules,
];
