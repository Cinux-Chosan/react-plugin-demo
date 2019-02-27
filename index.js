import { version, name } from './package';
const gNamespace = window || global || {}
const { reactPluginVersions = {} } = gNamespace;
gNamespace.reactPluginVersions = { ...reactPluginVersions, [name]: version };

export { default as Demo } from '@components/demo';