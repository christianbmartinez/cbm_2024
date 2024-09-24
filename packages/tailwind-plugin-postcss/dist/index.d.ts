import { type PluginCreator } from 'postcss';
export type PluginOptions = {
    base?: string;
    optimize?: boolean | {
        minify?: boolean;
    };
};
declare const _default: PluginCreator<PluginOptions>;
export default _default;
