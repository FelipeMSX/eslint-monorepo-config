import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";

import { ignoredFolders } from "../internal-utils";

export const reactForNextRules = defineConfig([
    ignoredFolders,
    {
        files: ["**/*.tsx", "**/*.jsx"],
        plugins: {
            "@next/next": nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
        },
    },
]);
