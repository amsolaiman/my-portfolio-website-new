const lintStagedConfig = {
  "**/*.{js,ts,tsx}": ["biome check --apply", "biome format --write"],
  "**/*.{json,md,yml,yaml}": ["biome format --write"],
  "**/*.ts?(x)": () => "tsc --noEmit --skipLibCheck",
};

export default lintStagedConfig;
