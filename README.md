# cbm_2024

My annual dev portfolio build 🫡

Currently in development 🚧

Using twv4 which is not tested in the way I am using it. Just experimenting with it for now.

# Current folder structure for Twv4

Here is the current folder structure I use to make things work. This is subject to change as I am actively experimenting with this setup, the cascade layers, configurations, and the design system overall. 

```
root(
├── app
│   └── routes          -- Routes
│   └── globals.css     -- Dynamically injected and minified css, via build script.
│   └── page.tsx        -- Home page.
│   └── *.[ts|x]        -- Any next config files/components/middleware/etc.
├── components          -- Components
│   └── **/*.[tsx]      -- Any and all components.
├── styles              -- All css files included here is compiled into globals.css. (For now)
│   └── base.css        -- Viewing v4 source code, I am experimenting with modularizing the css into different layers.
│   └── components.css
│   └── hl.css
│   └── index.css       -- Main css file, where all css files are imported and layered.
│   └── theme.css       -- Light/Dark theme variables.
│   └── typography.css  -- Custom typography based on traditional prose, as well as shadcn. Still needs work alongside Mdx components.
│   └── utilities.css   -- Utility classes. One line import rule.
├── lib                 -- Custom scripts and utilities   
│   └── plugins         -- Highlighter re written originally by sugar high.
│   └── fonts           -- Variable fonts.
│   └── *.[ts|x]        -- Any custom scripts or utilities.    
└── package.json        -- pnpm package.json. Build scripts, overrides, and dependencies testing react, next, and twv4 combinations.
└── tsconfig.json       -- Typescript configuration.
└── postcss.config.js   -- Postcss configuration.
└── pnpm-lock.yaml      -- pnpm lock file.
└── *.[ts]              -- Other files.
)
```

Using a custom highlighter I wrote locally with swc/cli for the highlighter. I omitted that for now. It's a modified version of [sugar-high](https://sugar-high.vercel.app/) that I plan on building upon.

You can use sugar-high highlight function directly as a replacement for the highlighter. Follow the documentation for styling.

Use only as a starting point! Do not use in production.

Fixes, features, and updates to come 🚀