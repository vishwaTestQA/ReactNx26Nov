export default [
  // ...keep existing base configs
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            // 1. Web-shell can import ANY module, shared lib, or API contract (no edits needed when adding new modules!)
            {
              sourceTag: 'scope:shell',
              onlyDependOnLibsWithTags: ['scope:*'],
            },
            // 2. Domain modules (add 1 entry here only when creating a new top-level domain)
            {
              sourceTag: 'scope:auth',
              onlyDependOnLibsWithTags: [
                'scope:auth',
                'scope:shared',
                'scope:api',
              ],
            },
            {
              sourceTag: 'scope:products',
              onlyDependOnLibsWithTags: [
                'scope:products',
                'scope:shared',
                'scope:api',
              ],
            },
            {
              sourceTag: 'scope:checkout',
              onlyDependOnLibsWithTags: [
                'scope:checkout',
                'scope:shared',
                'scope:api',
              ],
            },
            // 3. Shared and API foundation rules (never need changing)
            {
              sourceTag: 'scope:shared',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:api'],
            },
            {
              sourceTag: 'scope:api',
              onlyDependOnLibsWithTags: ['scope:api'],
            },
            // 4. Layer hierarchy rules (apply across ALL teams automatically)
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: [
                'type:feature',
                'type:ui',
                'type:data-access',
                'type:util',
              ],
            },
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: ['type:ui', 'type:util'],
            },
            {
              sourceTag: 'type:data-access',
              onlyDependOnLibsWithTags: ['type:data-access', 'type:util'],
            },
            {
              sourceTag: 'type:util',
              onlyDependOnLibsWithTags: ['type:util'],
            },
          ],
        },
      ],
    },
  },
  {
    ignores: ['**/vitest.config.*.timestamp*'],
  },
];
