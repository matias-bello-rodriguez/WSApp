const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Expo doesn't support symlinks out of the box, so we need to add
// the extra resolver options to make it work.
config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs', 'cjs'];
config.transformer.assetPlugins = ['expo-asset/tools/hashAssetFiles'];

module.exports = config;