# cbm_2024

My annual dev portfolio build currently in development 🚧

Next.js, TailwindV4, and experiments. Do not use for production in it's current state.

# Current folder structure for Twv4

Here is the current folder structure I use to make things work. (Not every file.) This is subject to change as I am actively experimenting with this setup, the cascade layers, configurations, and the design system overall. 

```
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
│   └── plugins         -- Highlighter re written originally by [sugar-high](https://sugar-high.vercel.app/). Replace with sugar-highs
                           `highlight` function.
│   └── fonts           -- Variable fonts.
│   └── *.[ts|x]        -- Any custom scripts or utilities.    
└── package.json        -- pnpm package.json. Build scripts, overrides, and dependencies testing react, next, and twv4 combinations.
└── tsconfig.json       -- Typescript configuration.
└── postcss.config.js   -- Postcss configuration.
└── pnpm-lock.yaml      -- pnpm lock file.
└── *.[ts]              -- Other files.
)
```

More features, styles, and components to come 🚀