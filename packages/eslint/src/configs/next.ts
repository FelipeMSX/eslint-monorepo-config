import { baseRules } from "../rules/base";
import { jsonRules } from "../rules/json";
import { reactForNextRules } from "../rules/react-for-next";
import { utilsRules } from "../rules/utils";

export const nextConfig = [
    ...baseRules,
    ...utilsRules,
    ...jsonRules,
    ...reactForNextRules,
];
